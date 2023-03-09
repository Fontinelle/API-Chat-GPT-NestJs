import { InputModelDto } from './dto/Input-model.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @ApiResponse({ status: 200, type: String })
  @Post()
  @HttpCode(HttpStatus.OK)
  sendText(@Body() inputModel: InputModelDto) {
    return this.promptService.sendText(inputModel);
  }
}
