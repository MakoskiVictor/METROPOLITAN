import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  // Inyección de servicios para poder utilizarlo en el controller
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    return this.authService.register();
  }
  @Post('login')
  login() {
    return this.authService.login();
  }
}
