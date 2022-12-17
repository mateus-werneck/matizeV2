import { UserEntity } from '@Entities/user.entity';
import { InvalidAuthException } from '@Exceptions/auth/invalidAuthException';
import { treatStringToBoolean } from '@Helpers/Boolean';
import { decodeJwtSecret, jwtConstants } from '@Helpers/Jwt';
import { hasValidPassword } from '@Helpers/Password';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '@Repositories/user/user.repository';
import { Service } from '@Services/standard/service';

@Injectable()
export class AuthService extends Service {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {
    super();
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    let user;

    try {
      user = await this.userRepository.findByEmail(email);
    } catch (error) {
      throw new InvalidAuthException();
    }
    if (!user || !hasValidPassword(password, user.password)) {
      throw new InvalidAuthException();
    }
    return user;
  }

  async validateAdmin(email: string): Promise<UserEntity> {
    let user;
    try {
      user = await this.userRepository.findByEmail(email);
    } catch (error) {
      throw new InvalidAuthException();
    }
    const isAdmin = treatStringToBoolean(user.isAdmin);
    if (!user) {
      throw new InvalidAuthException();
    }
    if (!isAdmin) {
      throw new InvalidAuthException();
    }
    return user;
  }

  async login(user: UserEntity) {
    return {
      access_token: this.jwtService.sign(
        { ...user.toView() },
        {
          secret: decodeJwtSecret(jwtConstants.secret)
        }
      )
    };
  }
}
