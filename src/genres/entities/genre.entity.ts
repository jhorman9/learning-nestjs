import { Videogame } from "src/videogames/entities/videogame.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @OneToMany(() => Videogame, videogame => videogame.genre)
    videogames: Videogame[];
}
