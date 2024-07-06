import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class User {
  @IsUUID()
  authSchId: string;

  /**
   * E-mail.
   * @example 'john.smith@example.com'
   */
  @IsString()
  @IsNotEmpty()
  email: string;

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

  @IsOptional()
  profilePictureUrl?: string;
}
