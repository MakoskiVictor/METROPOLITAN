import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  // Este service debe conectarse con otro módulo para usar el otro servicio: UserService
  constructor(private readonly usersService: UsersService) {}
  login() {
    return 'login';
  }

  register() {
    return 'register';
  }
}
