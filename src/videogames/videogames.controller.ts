import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { CreateVideoGameDto } from './dtos/create-videogame.dto';
import { UpdateVideoGameDto } from './dtos/update-videogame.dto';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Get()
  getAllVideogames(){
    return this.videogamesService.getAll();
  }

  @Get(':id')
  getVideogamesById(@Param('id') id:string){
    return this.videogamesService.getById(id);
  }

  @Post()
  createVideogames(@Body() videogameDto: CreateVideoGameDto){
    return this.videogamesService.create(videogameDto);
  }

  @Patch(':id')
  updateVideogame(@Param('id') id:string, @Body() videoGameDto: UpdateVideoGameDto){
    return this.videogamesService.update(id, videoGameDto);
  }

  @Delete(':id')
  removeVideogame(@Param('id') id:string){
    return this.videogamesService.remove(id);
  }
}
