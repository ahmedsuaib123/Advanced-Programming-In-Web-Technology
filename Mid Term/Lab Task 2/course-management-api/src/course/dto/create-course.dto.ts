import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  instructor: string;

  @Type(() => Number) // changes "3" (text) into 3 (number)
  @IsNumber()
  @Min(1)
  @Max(6)
  credits: number;

  @IsOptional() // description is not required
  @IsString()
  description?: string;
}