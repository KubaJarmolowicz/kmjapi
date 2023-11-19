import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { OpenAIService } from 'src/services/openAI.service';
import { MemoryService } from 'src/services/memoryService';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [OpenAIService, MemoryService],
})
export class QuestionsModule {}
