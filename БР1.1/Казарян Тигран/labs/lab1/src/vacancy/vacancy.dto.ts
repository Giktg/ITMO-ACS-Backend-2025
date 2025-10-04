import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApplicationStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVacancysDto {
  @ApiProperty({
    example: 'Senior Backend Engineer',
    description: 'The title of the vacancy',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'We are looking for an experienced backend developer to join our team...',
    description: 'Detailed description of the vacancy',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: '5+ years of Node.js, experience with PostgreSQL, knowledge of REST and GraphQL',
    description: 'Required qualifications and technical skills',
    required: false,
  })
  @IsString()
  @IsOptional()
  requirements?: string;

  @ApiProperty({
    example: 120000,
    description: 'Minimum salary (in local currency)',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  salary_from?: number;

  @ApiProperty({
    example: 200000,
    description: 'Maximum salary (in local currency)',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  salary_to?: number;

  @ApiProperty({
    example: '3–5 years',
    description: 'Required level of professional experience',
    required: false,
  })
  @IsString()
  @IsOptional()
  experience?: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the company posting the vacancy',
  })
  @IsNumber()
  company_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the industry associated with the vacancy (e.g., IT, Finance, Healthcare)',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  industry_id?: number;
}

export type TUpdateVacancysDto = Partial<CreateVacancysDto>;