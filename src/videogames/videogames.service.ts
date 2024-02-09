import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Videogame } from './entities/videogame.entity';
import { Repository } from 'typeorm';
import { CreateVideoGameDto } from './dtos/create-videogame.dto';
import { UpdateVideoGameDto } from './dtos/update-videogame.dto';

@Injectable()
export class VideogamesService {

    constructor( //Agregar
        @InjectRepository(Videogame) 
        private videogameRepository: Repository<Videogame>
    ) {}

    async getAll() {
        const videogames = await this.videogameRepository.find();
        return videogames;
    }

    async getById(id: string){
        const videogame = await this.videogameRepository.findOneBy({ id: +id });
        if(!videogame){
            throw new NotFoundException('Videogame not found');
        }
        return videogame;
    }

    async create(videogameDto: CreateVideoGameDto){
        const videogame = this.videogameRepository.create(videogameDto);
        await this.videogameRepository.save(videogame);
        return videogame;
    }

    async update(id: string, videoGameDto: UpdateVideoGameDto){
        const videogame = await this.videogameRepository.preload({
            id: +id,
            ...videoGameDto
        })
        await this.videogameRepository.save(videogame);
        return videogame;
    }

    async remove(id: string){
        const deleted = await this.videogameRepository.delete({ id: +id });
        if(deleted.affected === 0){
            throw new NotFoundException('Videojuego no encontrado');
        }
        return {
            message: 'Juego eliminado'
        }
    }
}
