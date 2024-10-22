import { IsBoolean, IsString } from 'class-validator';

export class CreateAuthorizationDto {
  @IsString()
  roleName: string;

  @IsString()
  permission: string;

  @IsString()
  @IsBoolean()
  available: boolean;
}
