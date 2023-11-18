import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { OpenAIService } from 'src/services/openAI.service';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [OpenAIService],
})
export class QuestionsModule {}
