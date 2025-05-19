import { Role } from '../../../common/enums/role.enums';

export interface PayloadDTO {
  id: number;
  email: string;
  role: Role;
}
