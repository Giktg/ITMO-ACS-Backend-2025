import {IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";



export class CreateIndustrysDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}

export type TUpdateIndustrysDto = Partial<CreateIndustrysDto>;