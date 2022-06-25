import { ApiProperty } from '@nestjs/swagger'
import {
  IsDefined,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsEmail,
  IsOptional
} from 'class-validator'

export class CreateAuthDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  idZone: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  @IsDefined()
  active: boolean
}
