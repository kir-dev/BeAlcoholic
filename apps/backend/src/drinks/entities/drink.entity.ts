import { DrinkType } from '@prisma/client';
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { IsFloat } from 'src/util/is-float.validator';

export class Drink {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(DrinkType)
  type: DrinkType;

  @IsFloat()
  @Min(0)
  alcoholContent: number;

  @IsBoolean()
  custom: boolean;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  createdAt: Date;
}
