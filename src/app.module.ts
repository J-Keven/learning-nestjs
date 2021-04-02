import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    RoutesModule,
    MongooseModule.forRoot(
      'mongodb://mongo:mongo@mongodb/nest?authSource=admin',
      {
        useNewUrlParser: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //
}
