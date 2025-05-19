import { IsNotEmpty, ValidationOptions } from 'class-validator';

export function IsRequired(validationOptions?: ValidationOptions) {
  return IsNotEmpty({
    message: ({ property }) => `Field '${property}' is required.`,
    ...validationOptions,
  });
}
