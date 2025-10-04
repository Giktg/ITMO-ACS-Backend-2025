import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkExperiencesDto {
  @ApiProperty({
    example: 'Tech Innovations Inc.',
    description: 'Name of the company where the work experience was gained',
  })
  @IsString()
  company_name: string;

  @ApiProperty({
    example: 'Senior Frontend Developer',
    description: 'Job title or position held',
  })
  @IsString()
  position: string;

  @ApiProperty({
    example: '2020-03-15T00:00:00.000Z',
    description: 'Start date of the work experience (ISO 8601 format)',
  })
  @IsDateString()
  start_date: string;

  @ApiProperty({
    example: '2024-08-01T00:00:00.000Z',
    description: 'End date of the work experience (ISO 8601 format). Omit if currently working.',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiProperty({
    example: 'Led a team of 5 developers to build a scalable React application...',
    description: 'Detailed description of responsibilities and achievements',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the resume this work experience belongs to',
  })
  @IsNumber()
  resume_id: number;
}

export type TUpdateWorkExperiencesDto = Partial<CreateWorkExperiencesDto>;