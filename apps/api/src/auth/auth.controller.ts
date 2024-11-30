import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiProperty } from '@nestjs/swagger';

class LoginDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    if (!email || !password) {
      return { message: 'Email and password are required' };
    }

    try {
      const result = await this.authService.login(email, password);
      return {
        message: 'Login successful',
        token: result.session?.access_token,
        user: result.user,
      };
    } catch (error) {
      return { message: error.message };
    }
  }
}
