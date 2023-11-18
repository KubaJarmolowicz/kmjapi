import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from 'src/services/openAI.service';

@Controller('question')
export class QuestionsController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post()
  async getReply(@Body('question') question: string): Promise<string> {
    return await this.openAIService.getReply(question);
  }
}
