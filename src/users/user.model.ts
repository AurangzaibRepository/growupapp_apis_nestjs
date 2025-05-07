import {
  Model,
  Table,
  Column,
  AllowNull,
  DefaultScope,
  DataType,
  Unique,
  IsEmail,
} from 'sequelize-typescript';
import { USERROLES } from 'src/enums/users.enum';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table({
  tableName: 'users',
  modelName: 'User',
})
export class User extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(30))
  first_name: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  last_name: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  @IsEmail
  @Unique
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  contact_number: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  password: string;

  @AllowNull(false)
  @Column
  role: USERROLES;
}
