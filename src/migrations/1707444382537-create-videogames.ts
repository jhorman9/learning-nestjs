import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVideogames1707444382537 implements MigrationInterface {
    name = 'CreateVideogames1707444382537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "videogame" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "releaseYear" integer NOT NULL, "developer" character varying NOT NULL, CONSTRAINT "PK_a9b00a577b002ce1584b97d192d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "videogame"`);
    }

}
