import { UserRoles } from '../enums/UserRoles'

export interface UserLogin {
  email: string;
  password: string;
  role: UserRoles;
}
