import { Controller, Post, Body } from '@nestjs/common';
import { MessageContent } from 'langchain/schema';
import { OpenAIService } from 'src/services/openAI.service';

@Controller('question')
export class QuestionsController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post()
  async getReply(@Body('question') question: string): Promise<MessageContent> {
    return await this.openAIService.getReply(question);
  }
}
