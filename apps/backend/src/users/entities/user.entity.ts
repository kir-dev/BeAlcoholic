import { Gender } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class User {
  @IsUUID()
  authSchId: string;

  /**
   * E-mail.
   * @example 'john.smith@example.com'
   */
  @IsString()
  @IsOptional()
  email?: string;

  /**
   * First Name.
   * @example John
   */
  @IsString()
  @IsNotEmpty()
  firstName: string;

  /**
   * Last Name.
   * @example Smith
   */
  @IsString()
  @IsNotEmpty()
  lastName: string;

  /**
   * Gender
   * @example Male
   */
  @IsOptional()
  gender?: Gender;

  /**
   * Weight
   * @example 75.2
   */
  @IsOptional()
  @Min(0)
  weight?: number;

  /**
   * Is the user an administrator?
   */
  @IsBoolean()
  isAdmin: boolean;

  @IsOptional()
  profilePictureUrl?: string;
}
