import { Injectable, UnauthorizedException, NotFoundException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: { email: string; password: string; firstName: string; lastName: string }) {
    // Check if user already exists
    try {
      await this.usersService.findByEmail(registerDto.email);
      throw new ConflictException('User with this email already exists');
    } catch (error) {
      if (!(error instanceof NotFoundException)) {
        throw error;
      }
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);

    // Create user
    const user = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    // Return user without password
    const { password, ...result } = user;
    return result;
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async updateUser(userId: string, updateDto: { firstName?: string; lastName?: string; email?: string }) {
    const user = await this.usersService.findById(userId);
    
    if (updateDto.email && updateDto.email !== user.email) {
      // Check if new email is already taken
      try {
        await this.usersService.findByEmail(updateDto.email);
        throw new UnauthorizedException('Email already exists');
      } catch (error) {
        if (!(error instanceof NotFoundException)) {
          throw error;
        }
      }
    }

    Object.assign(user, updateDto);
    return this.usersService.update(userId, user);
  }

  async deleteUser(userId: string) {
    await this.usersService.findById(userId); // Verify user exists
    return this.usersService.delete(userId);
  }
}