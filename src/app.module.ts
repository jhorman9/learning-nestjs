import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VideogamesModule } from './videogames/videogames.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname,'..','public'),
			renderPath: '/',
		}),
		VideogamesModule
	],
})

export class AppModule {}
