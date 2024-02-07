import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateVideoGameDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(1950)
    @Max(2024)
    releaseYear: number;

    @IsString()
    @IsNotEmpty()
    developer: string;
}