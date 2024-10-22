import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';

import { CreateAuthorizationDto } from '../dto/create-authorization.dto';
import { UpdateAuthorizationDto } from '../dto/update-authorization.dto';
import { CreateAuthorizationService } from '../services/create-authorization.service';
import { GetAvailableAuthorizationsService } from '../services/get-available-authorizations.service';
import { UpdateAuthorizationService } from '../services/update-authorization.service';

@Controller('authorizations')
export class AuthorizationController {
  constructor(
    private readonly createAuthorizationService: CreateAuthorizationService,
    private readonly getAvailableAuthorizationsService: GetAvailableAuthorizationsService,
    private readonly updateAuthorizationService: UpdateAuthorizationService,
  ) {}

  @Post()
  createAuthorization(@Body() createAuthorizationDto: CreateAuthorizationDto) {
    return this.createAuthorizationService.create(createAuthorizationDto);
  }

  @Get('available')
  getAvailableAuthorizations() {
    return this.getAvailableAuthorizationsService.getAvailableAuthorizations();
  }

  @Patch(':id')
  updateAuthorization(
    @Param('id') id: number,
    @Body() updateAuthorizationDto: UpdateAuthorizationDto,
  ) {
    return this.updateAuthorizationService.update(id, updateAuthorizationDto);
  }
}
