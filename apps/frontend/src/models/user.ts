export interface PublicUser {
  authSchId: string;
  email?: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  profilePictureUrl?: string;
  createdAt: Date;
}
