import { Injectable } from '@nestjs/common';

@Injectable()
export class VideogamesService {
    getAll() {
        return 'Trayendo los videjuegos(desde el servicio)';
    }

    getById(id: string){
        return `Obteniendo por el id ${id}`;
    }

    create(){
        return 'Creando videojuego';
    }

    update(id: string){
        return 'cambiando datos de videojuego' + id;
    }

    remove(id: string){
        return 'Eliminando un videojueg de id' + id;
    }
}
