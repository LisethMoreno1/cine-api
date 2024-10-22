import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorization } from '../entities/authorization.entity';
import { CreateAuthorizationDto } from '../dto/create-authorization.dto';


@Injectable()
export class CreateAuthorizationService {
  constructor(
    @InjectRepository(Authorization)
    private authorizationRepository: Repository<Authorization>,
  ) {}

  async create(createAuthorizationDto: CreateAuthorizationDto): Promise<Authorization> {
    const newAuthorization = this.authorizationRepository.create(createAuthorizationDto);
    return await this.authorizationRepository.save(newAuthorization);
  }
}
