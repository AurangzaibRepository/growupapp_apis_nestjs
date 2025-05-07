import { USERROLES } from 'src/enums/users.enum';

export interface UserInterface {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
  password: string;
  picture: string;
  role: USERROLES;
}
