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
    console.log(videogameDto);
    return this.videogamesService.create();
  }

  @Patch(':id')
  updateVideogame(@Param('id') id:string, @Body() videoGameDto: UpdateVideoGameDto){
    console.log(videoGameDto);
    return this.videogamesService.update(id);
  }

  @Delete(':id')
  removeVideogame(@Param('id') id:string){
    return this.videogamesService.remove(id);
  }
}
