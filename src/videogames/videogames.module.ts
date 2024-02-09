import { Module } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { VideogamesController } from './videogames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videogame } from './entities/videogame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videogame])], //Importar, Videogame
  controllers: [VideogamesController],
  providers: [VideogamesService],
})
export class VideogamesModule {}
