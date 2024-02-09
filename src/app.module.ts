import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VideogamesModule } from './videogames/videogames.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresModule } from './genres/genres.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname,'..','public'),
			renderPath: '/',
		}),
		VideogamesModule,
		//Para trabajar con variables de entornos debemos incluir //ConfigModule.forRoot()
		ConfigModule.forRoot({
			isGlobal: true,
			load: [typeorm],
		  }),
		  TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => configService.get('typeorm')
		  }),
		  GenresModule,
	],
})

export class AppModule {}
