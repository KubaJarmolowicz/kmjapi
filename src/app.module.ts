import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [ConfigModule.forRoot(), QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
