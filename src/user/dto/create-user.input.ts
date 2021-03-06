import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsString()
    @IsNotEmpty({message: 'Nome inválido.'})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Email inválido.'})
    email: string;
}