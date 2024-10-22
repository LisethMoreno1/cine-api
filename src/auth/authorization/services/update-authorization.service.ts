import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorization } from '../entities/authorization.entity';
import { UpdateAuthorizationDto } from '../dto/update-authorization.dto';

@Injectable()
export class UpdateAuthorizationService {
  constructor(
    @InjectRepository(Authorization)
    private authorizationRepository: Repository<Authorization>,
  ) {}

  async update(
    id: number,
    updateDto: UpdateAuthorizationDto,
  ): Promise<Authorization> {
    const auth = await this.authorizationRepository.findOne({ where: { id } });
    if (!auth) {
      throw new NotFoundException('Authorization not found');
    }
    Object.assign(auth, updateDto);
    return this.authorizationRepository.save(auth);
  }
}
