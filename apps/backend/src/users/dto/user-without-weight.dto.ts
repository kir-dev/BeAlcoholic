import { OmitType } from '@nestjs/swagger';

import { User } from '../entities/user.entity';

export class UserWithoutWeight extends OmitType(User, ['weight']) {}
