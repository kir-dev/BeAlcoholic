import { DrinkType } from '@prisma/client';
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { IsFloat } from 'src/util/is-float.validator';

export class Drink {
  @IsUUID()
  id: string;

  /**
   * Name of the drink
   * @example Soproni meggy
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

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  createdAt: Date;
}
