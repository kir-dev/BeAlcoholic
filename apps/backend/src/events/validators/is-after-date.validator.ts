import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsAfterDate', async: false })
export class AfterDateValidator implements ValidatorConstraintInterface {
  validate(propertyValue: any, args: ValidationArguments) {
    const [relatedDatePropertyName] = args.constraints;
    const relatedDateValue = (args.object as any)[relatedDatePropertyName];
    return (
      typeof propertyValue === 'string' &&
      typeof relatedDateValue === 'string' &&
      new Date(propertyValue) > new Date(relatedDateValue)
    );
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedDatePropertyName] = args.constraints;
    const relatedDateValue = (args.object as any)[relatedDatePropertyName];
    const propertyValue = args.value;

    return `${args.property} (${propertyValue}) must be after ${relatedDatePropertyName} (${relatedDateValue}).`;
  }
}

export function IsAfterDate(relatedDatePropertyName: string, validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [relatedDatePropertyName],
      validator: AfterDateValidator,
    });
  };
}
