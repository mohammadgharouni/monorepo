import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { User } from '@supabase/auth-js';

class LoginRequestDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

class LoginResponseDto {
  @ApiProperty()
  provider_token?: string;

  @ApiProperty()
  provider_refresh_token?: string;

  @ApiProperty()
  refresh_token: string;

  @ApiProperty()
  expires_in: number;

  @ApiProperty()
  expires_at?: number;

  @ApiProperty()
  token_type: string;

  @ApiProperty()
  user: User;

  @ApiProperty()
  access_token: string;
}

@Controller('auth')
@ApiResponse({ type: LoginResponseDto })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = body;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    try {
      const result = await this.authService.login(email, password);

      // Map the Supabase result to LoginResponseDto
      const response: LoginResponseDto = {
        provider_token: result.session?.provider_token,
        provider_refresh_token: result.session?.provider_refresh_token,
        refresh_token: result.session?.refresh_token,
        expires_in: result.session?.expires_in,
        expires_at: result.session?.expires_at,
        token_type: result.session?.token_type,
        user: result.user,
        access_token: result.session?.access_token,
      };

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
