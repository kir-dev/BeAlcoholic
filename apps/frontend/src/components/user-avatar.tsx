import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PublicUser } from '@/models/user';

interface Props {
  user: PublicUser;
  className?: string;
}

export function UserAvatar({ user, className }: Props) {
  return (
    <Avatar className={className}>
      <AvatarImage src={user.profilePictureUrl} alt='@shadcn' />
      <AvatarFallback>
        {user.lastName[0]}
        {user.firstName[0]}
      </AvatarFallback>
    </Avatar>
  );
}
