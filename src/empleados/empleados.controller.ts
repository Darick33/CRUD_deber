import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { IEmpleados } from './empleados.interface';
import { EmpleadoDTO } from './empleado.dto';

@Controller('empleados')
export class EmpleadosController {
    constructor(private emplaodsServicio:EmpleadoDTO){}

    @Get()
    todos(){
        return this.emplaodsServicio.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.emplaodsServicio.uno(id)
    }
    @Post()
    insertar(@Body()empleado: EmpleadoDTO){
        return this.emplaodsServicio.insertar(empleado)
    }
    @Put(':id')
    actualizat(@Param('id')id:string, @Body() empleado: EmpleadoDTO){
        return this.emplaodsServicio.actualizar(id,empleado);
    }
    @Delete(':id')
    eliminar(@Param ('id') id:string){
        return this.emplaodsServicio.eliminar(id);
    }




}
