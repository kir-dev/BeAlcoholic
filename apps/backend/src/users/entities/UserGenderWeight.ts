import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class UserGenderWeight {
  /**
   * Gender
   * @example Male/Female
   */
  @ApiPropertyOptional({ enum: Gender })
  gender?: Gender;

  /**
   * Weight
   * @example 75.2 (kg)
   */
  @ApiPropertyOptional({ type: Number, minimum: 0 })
  weight?: number;
}
