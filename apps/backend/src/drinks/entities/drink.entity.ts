import { DrinkType } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { IsFloat } from 'src/util/is-float.validator';

export class Drink {
  /**
   * @example aaaaaaaa-bbbb-cccc-dddd-eeee-ff0123456789
   */
  @IsUUID()
  id: string;

  /**
   * Name of the drink
   * @example 'Soproni meggy'
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Type of the drink
   * @example BEER
   */
  @IsEnum(DrinkType)
  type: DrinkType;

  /**
   * Quantity of the drink in milliliter
   * @example 500
   */
  @IsNumber()
  @Min(0)
  milliliter: number;

  /**
   * Alcohol content of the drink
   * @example 4.5
   */
  @IsFloat()
  @Min(0)
  alcoholContent: number;

  /**
   * Whether it was created by a user
   */
  @IsBoolean()
  custom: boolean;

  /**
   * @example "A beer that doesn't really taste like beer."
   */
  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  createdAt: Date;
}
