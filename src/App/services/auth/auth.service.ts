import { UserEntity } from '@Entities/user/user.entity';
import { InvalidAuthException } from '@Exceptions/auth/invalidAuthException';
import { decodeJwtSecret, jwtConstants } from '@Helpers/Jwt';
import { hasValidPassword } from '@Helpers/Password';
import { CustomerRepository } from '@Repositories/customer/customer.repository';
import { UserRepository } from '@Repositories/user/user.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService extends Service {
  constructor(
    private userRepository: UserRepository,
    private customerRepository: CustomerRepository,
    private jwtService: JwtService
  ) {
    super();
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    let user;

    try {
      user = await this.findCustomer(email);
    } catch (error) {
      user = await this.findUser(email);
    }

    if (!hasValidPassword(password, user.password)) {
      throw new InvalidAuthException();
    }
    return user;
  }

  async findUser(email: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findByEmail(email);
    } catch (error) {
      throw new InvalidAuthException();
    }
  }

  async findCustomer(email: string): Promise<UserEntity> {
    try {
      const customer = await this.customerRepository.findByEmail(email);
      return new UserEntity(customer.getData());
    } catch (error) {
      throw new InvalidAuthException();
    }
  }

  async validateAdmin(email: string): Promise<UserEntity> {
    let user;

    try {
      user = await this.userRepository.findByEmail(email);
    } catch (error) {
      throw new InvalidAuthException();
    }

    if (user.isAdmin) {
      return user;
    }

    throw new InvalidAuthException();
  }

  async login(user: UserEntity) {
    return {
      access_token: this.jwtService.sign(
        { ...user.toView() },
        {
          secret: decodeJwtSecret(jwtConstants.secret),
          expiresIn: process.env.EXPIRES_IN
        }
      ),
      token_type: 'Bearer',
      expires_in: 3600
    };
  }
}
