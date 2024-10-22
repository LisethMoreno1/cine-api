import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorization } from '../entities/authorization.entity';

@Injectable()
export class GetAvailableAuthorizationsService {
  constructor(
    @InjectRepository(Authorization)
    private authorizationRepository: Repository<Authorization>,
  ) {}

  async getAvailableAuthorizations(): Promise<Authorization[]> {
    return await this.authorizationRepository.find({ where: { available: true } });
  }
}
