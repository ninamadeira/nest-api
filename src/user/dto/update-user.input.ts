import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'Nome inválido.'})
    name?: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty({message: 'Email inválido.'})
    email?: string;
}