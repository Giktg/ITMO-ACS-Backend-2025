import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResumesDto {
  @ApiProperty({
    example: 'Senior Frontend Developer Resume',
    description: 'The title of the resume',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '5+ years of experience building scalable web applications with React and TypeScript.',
    description: 'Summary of professional experience',
    required: false,
  })
  @IsString()
  @IsOptional()
  experience_summary?: string;

  @ApiProperty({
    example: 150000.75,
    description: 'Expected salary (in local currency, can be fractional)',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  salary_expectations?: number;

  @ApiProperty({
    example: '["React", "TypeScript", "Node.js", "GraphQL"]',
    description: 'Skills as a JSON-encoded string or plain text list',
    required: false,
  })
  @IsString()
  @IsOptional()
  skills?: string;

  @ApiProperty({
    example: 2,
    description: 'ID of the user who owns this resume (must be unique per user)',
  })
  @IsNumber()
  user_id: number;
}

export type TUpdateResumesDto = Partial<CreateResumesDto>;