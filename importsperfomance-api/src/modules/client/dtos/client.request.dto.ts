import { IsEmail, Length } from '@nestjs/class-validator';
import { IsRequired } from '../../../common/decorators/is.required.decorator';
import { IsCPFValid } from '../../../common/decorators/is.cpf.valid.decorator';

export class ClientRequestDTO {
  @IsRequired()
  @Length(2)
  name: string;

  @IsRequired()
  @IsEmail(
    {},
    {
      message:
        "The field '$property' must follow the pattern exemple@gmail.com",
    },
  )
  email: string;

  @IsRequired()
  @Length(14, 14)
  @IsCPFValid()
  cpf: string;

  @IsRequired()
  address: string;

  @IsRequired()
  phoneNumber: string;

  @IsRequired()
  @Length(3, 50)
  password: string;
}
