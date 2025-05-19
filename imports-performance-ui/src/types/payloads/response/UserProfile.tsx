import {UserRoles} from "../enums/UserRoles";

export interface UserProfile {
  id: number;
  email: string;
  role: UserRoles
}
