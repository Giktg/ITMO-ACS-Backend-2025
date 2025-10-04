import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApplicationStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationsDto {
  @ApiProperty({
    example: 'Dear hiring team, I am very interested in this position...',
    description: 'Optional cover message from the applicant',
    required: false,
  })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiProperty({
    enum: ApplicationStatus,
    example: ApplicationStatus.pending,
    description: 'Current status of the application (e.g., PENDING, ACCEPTED, REJECTED)',
    required: false,
  })
  @IsEnum(ApplicationStatus)
  @IsOptional()
  status?: ApplicationStatus;

  @ApiProperty({
    example: 2,
    description: 'ID of the user submitting the application',
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the vacancy the user is applying to',
  })
  @IsNumber()
  vacancy_id: number;
}

export type TUpdateApplicationsDto = Partial<CreateApplicationsDto>;