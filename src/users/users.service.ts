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

  async getListing(pageNumber: number): Promise<User[]> {
    const users = await this.user.findAll({
      limit: 10,
      offset: 0,
    });

    return users;
  }
}
