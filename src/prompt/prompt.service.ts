import { Injectable } from '@nestjs/common';
import { openai } from '../config/openai';

@Injectable()
export class PromptService {
  async sendText(inputModel) {
    const openaiAPI = openai.configuration();

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel),
      );

      return {
        success: true,
        data: response.data.choices[0].text,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response
          ? error.response.data
          : 'There was an issue on the server',
      };
    }
  }
}
