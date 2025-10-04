import { IsEnum, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanysDto {
  @ApiProperty({
    example: 'Tech Innovations Inc.',
    description: 'The name of the company',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'A leading software development company specializing in AI solutions.',
    description: 'Detailed description of the company',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'https://techinnovations.com',
    description: 'Official website URL of the company',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  website?: string;

  @ApiProperty({
    example: 3,
    description: 'ID of the user who owns or created the company profile',
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the industry the company belongs to (e.g., IT, Healthcare, Finance)',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  industry_id?: number;
}

export type TUpdateCompanysDto = Partial<CreateCompanysDto>;