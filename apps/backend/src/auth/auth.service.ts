import { AuthSchProfile } from '@kir-dev/passport-authsch';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async findOrCreateUser(userProfile: AuthSchProfile): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { authSchId: userProfile.authSchId } });
    if (user) return user;
    return await this.prisma.user.create({
      data: {
        authSchId: userProfile.authSchId,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        email: userProfile.email,
      },
    });
  }

  login(user: User): string {
    return this.jwtService.sign(user, {
      secret: process.env.JWT_SECRET,
      expiresIn: '7 days',
    });
  }
}
