import { Injectable } from '@nestjs/common';
import { IEmpleados } from './empleados.interface';
import {v4 as uuidV4} from 'uuid';

@Injectable()
export class EmpleadosService {
    
    empleados:IEmpleados[] = [];
    todos(){
        return this.empleados;
    }

    uno(id:String){
        return this.empleados.find((empleado)=>{empleado.id ==id});
    }

    insertar(empleado:IEmpleados){
        const emp = {
            id:uuidV4(),
            ...empleado,

        };
        this.empleados.push(emp);
        return this.empleados;

    }

    actualizar(id:String, empleadoActualizar: IEmpleados){
        const nuevoemp = {id, ...empleadoActualizar};
        this.empleados = this.empleados.map((empleado)=>(empleado.id ===id ? nuevoemp : empleado));
        return nuevoemp;
        
    }
    eliminar(id: string){
        this.empleados = this.empleados.filter((empleado)=> empleado.id !==id);
        return 'empleado murido';
    }
}
