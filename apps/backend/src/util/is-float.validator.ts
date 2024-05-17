import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsFloat(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isFloat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'number' && !isNaN(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a float number`;
        },
      },
    });
  };
}
