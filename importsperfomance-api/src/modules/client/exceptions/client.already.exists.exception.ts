import { BusinessException } from '../../../common/exceptions/business.exception';

export class ClientAlreadyExistsException extends BusinessException {
  constructor(message: string) {
    super(message);
  }
}
