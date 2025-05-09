import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private user: typeof User,
  ) {}

}
