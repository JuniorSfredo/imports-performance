import {
  ArgumentMetadata,
  PipeTransform,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ClientInvalidFieldsException } from '../../modules/client/exceptions/client.invalid.fields.exception';

export class CustomValidationPipe
  extends ValidationPipe
  implements PipeTransform
{
  constructor() {
    super({
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages: string[] = [];

        for (const error of errors) {
          if (error.constraints)
            messages.push(...Object.values(error.constraints));
        }

        return new ClientInvalidFieldsException('Invalid Fields', messages);
      },
    });
  }

  transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    return super.transform(value, metadata);
  }
}
