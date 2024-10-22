import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from './entities/authorization.entity';

import { AuthorizationController } from './controllers/authorization.controller';
import { CreateAuthorizationService } from './services/create-authorization.service';
import { GetAvailableAuthorizationsService } from './services/get-available-authorizations.service';
import { UpdateAuthorizationService } from './services/update-authorization.service';

@Module({
  imports: [TypeOrmModule.forFeature([Authorization])],
  controllers: [AuthorizationController],
  providers: [
    CreateAuthorizationService,
    GetAvailableAuthorizationsService,
    UpdateAuthorizationService,
  ],
})
export class AuthorizationModule {}
