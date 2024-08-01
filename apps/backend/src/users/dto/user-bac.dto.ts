import { IsNotEmpty, Min } from 'class-validator';
import { IsFloat } from 'src/util/is-float.validator';

export class UserBac {
  /**
   * Blood Alcohol Content.
   * @example 0.06
   */
  @IsFloat()
  @IsNotEmpty()
  @Min(0)
  alcoholContent: number;
}
