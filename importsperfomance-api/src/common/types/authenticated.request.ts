import { PayloadDTO } from '../../modules/auth/dtos/payload.dto';

export interface AuthenticatedRequest {
  user: PayloadDTO;
}
