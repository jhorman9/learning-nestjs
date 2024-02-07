import { PartialType } from "@nestjs/mapped-types";
import { CreateVideoGameDto } from "./create-videogame.dto";

//Reutilizar lo mismo que estoy usando en create-videogame.dto.ts
export class UpdateVideoGameDto extends PartialType(CreateVideoGameDto){}