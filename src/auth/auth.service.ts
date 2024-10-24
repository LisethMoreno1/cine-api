import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service'; 
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(
    authCredentialsDto: AuthCredentialsDto,
): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersService.validateUser(username, password); 
    if (!user) {
        throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.userId };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
}


  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.validateUser(username, password);
    if (!user) {
        return null; 
    }
    return user;
}


}
