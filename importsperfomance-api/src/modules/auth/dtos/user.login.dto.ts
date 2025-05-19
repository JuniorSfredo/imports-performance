import { Role } from '../../../common/enums/role.enums';

export class UserLoginDTO {
  email: string;
  password: string;
  role: Role;
}
