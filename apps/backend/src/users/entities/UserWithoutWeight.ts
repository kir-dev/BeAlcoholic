import { OmitType } from '@nestjs/swagger';

import { User } from './user.entity';

export class UserWithoutWeight extends OmitType(User, ['weight']) {}
