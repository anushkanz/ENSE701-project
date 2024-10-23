import { Date } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    fname: string;
    @IsNotEmpty()
    lname: string;
    type: string;
}