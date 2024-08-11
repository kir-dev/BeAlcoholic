import { Gender } from '@prisma/client';
import { IsEnum, IsOptional, Min } from 'class-validator';
import { IsFloat } from 'src/util/is-float.validator';

export class UserGenderWeight {
  /**
   * Gender
   * @example Male
   */
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  /**
   * Weight
   * @example 75.2
   */
  @IsFloat()
  @Min(0)
  @IsOptional()
  weight?: number;
}
