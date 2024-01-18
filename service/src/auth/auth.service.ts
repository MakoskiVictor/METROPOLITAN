import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  // Este service debe conectarse con otro módulo para usar el otro servicio: UserService
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const findUserMail = await this.usersService.findOneByEmail(
      registerDto.email,
    );

    if (findUserMail) {
      return new HttpException('Email alredy exists', HttpStatus.CONFLICT);
    }
    return await this.usersService.create(registerDto);
  }

  login() {
    return 'login';
  }
}
