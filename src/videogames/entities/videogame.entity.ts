import { Genre } from "src/genres/entities/genre.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Videogame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        // nullable: true,
        // unique: true,
    })
    name: string;

    @Column('int')
    releaseYear: number;

    @Column('varchar')
    developer: string;

    @Column({
        nullable: true,
    })
    genreId: number;

    @ManyToOne(()=> Genre, genre => genre.videogames)
    genre: Genre
}