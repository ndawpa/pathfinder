import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Put, Delete, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

interface RequestWithUser extends Request {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: RequestWithUser) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(
    @Request() req: RequestWithUser,
    @Body() updateDto: { firstName?: string; lastName?: string; email?: string }
  ) {
    return this.authService.updateUser(req.user.id, updateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('profile')
  async deleteProfile(@Request() req: RequestWithUser) {
    return this.authService.deleteUser(req.user.id);
  }
}