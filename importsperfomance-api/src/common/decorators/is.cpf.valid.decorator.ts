import { ValidationOptions, registerDecorator } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCPFValid(validationOptions?: ValidationOptions) {
  return function (obj: object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: string) {
          return cpf.isValid(value);
        },
        defaultMessage(): string {
          return `${propertyName} is not valid.`;
        },
      },
    });
  };
}
