import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEducationsDto {
  @ApiProperty({
    example: 'Stanford University',
    description: 'Name of the educational institution',
  })
  @IsString()
  institution: string;

  @ApiProperty({
    example: 'Bachelor of Science',
    description: 'Type of degree obtained (e.g., Bachelor, Master, PhD)',
  })
  @IsString()
  degree: string;

  @ApiProperty({
    example: 'Computer Science',
    description: 'Field or major of study',
    required: false,
  })
  @IsString()
  @IsOptional()
  field_of_study?: string;

  @ApiProperty({
    example: '2016-09-01T00:00:00.000Z',
    description: 'Start date of the education period (ISO 8601 format)',
  })
  @IsDateString()
  start_date: string;

  @ApiProperty({
    example: '2020-06-15T00:00:00.000Z',
    description: 'Graduation or end date (ISO 8601 format). Omit if still studying.',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the resume this education entry belongs to',
  })
  @IsNumber()
  resume_id: number;
}

export type TUpdateEducationsDto = Partial<CreateEducationsDto>;