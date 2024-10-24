import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LocalAuthGuard } from './local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Body() authCredentialsDto: AuthCredentialsDto) {
        const { username, password } = authCredentialsDto; 
        return this.authService.validateUser(username, password); 
    }
}
