import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || 'your-super-secret-key-change-this-in-production',
  signOptions: {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
};