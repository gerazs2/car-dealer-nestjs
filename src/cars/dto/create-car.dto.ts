import { IsString,MinLength,MaxLength } from "class-validator";

export class CreateCarDto {
  @IsString()
  readonly brand?: string;
  @IsString()
  readonly model?: string;
  @IsString()
  readonly color?: string;
  @IsString()
  @MinLength(17)
  @MaxLength(17)
  readonly vin?: string;
}
