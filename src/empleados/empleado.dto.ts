import { IsNotEmpty, IsString } from "class-validator";

export class EmpleadoDTO{
    @IsNotEmpty()
    @IsString()
    nombres: string;
    @IsNotEmpty()
    @IsString()
    apellidos: string;
    @IsNotEmpty()
    @IsString()
    edad: number;
    @IsNotEmpty()
    @IsString()
    fecha_nacimientos: Date;
    @IsNotEmpty()
    @IsString()
    cedula: string;
}