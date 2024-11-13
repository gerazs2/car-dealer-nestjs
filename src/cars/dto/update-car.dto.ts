import {
  IsString,
  MinLength,
  MaxLength,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @IsOptional()
  readonly model?: string;
  @IsString()
  @IsOptional()
  readonly color?: string;
  @IsString()
  @IsOptional()
  @MinLength(17)
  @MaxLength(17)
  readonly vin?: string;
}
