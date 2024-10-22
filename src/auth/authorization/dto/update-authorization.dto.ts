import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorizationDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'El nombre del rol no puede estar vacío.' })
  roleName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'El permiso no puede estar vacío.' })
  permission?: string;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
