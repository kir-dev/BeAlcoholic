// src/components/Navbar.tsx
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Navbar() {
  // Mock user data
  const userId = 'exampleUserId';
  const avatarSrc = 'https://via.placeholder.com/150';

  return (
    <nav className='bg-gray-800 p-4 mb-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* bealcoholic sign */}
        <span className='text-white text-3xl font-bold justify-between'>BeAlcoholic.</span>

        {/* avatar */}
        <div className='flex items-center space-x-4'>
          <Link href={`/users/${userId}`} className='flex items-center'>
            <Avatar>
              <AvatarImage src={avatarSrc} alt='User Avatar' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
}
