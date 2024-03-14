import { Injectable } from '@nestjs/common';
type Hello = {
  Description: string
  Url: string
}
@Injectable()
export class AppService {
  getHello(): Hello[] {
    return [
      {
        Description: "To make a register",
        Url: "/auth/register"
      },
      {
        Description: "To make a login",
        Url: "/auth/login"
      }
  ]
  }
}
