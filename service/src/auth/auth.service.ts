import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  // Este service debe conectarse con otro módulo para usar el otro servicio: UserService
  constructor(private readonly usersService: UsersService) {}

  async register({ firstname, lastname, email, password }: RegisterDto) {
    const findUserMail = await this.usersService.findOneByEmail(email);

    if (findUserMail) {
      return new HttpException('Email alredy exists', HttpStatus.CONFLICT);
    }
    return await this.usersService.create({
      firstname,
      lastname,
      email,
      password: await bcryptjs.hash(password, 10),
    });
  }

  login() {
    return 'login';
  }
}
