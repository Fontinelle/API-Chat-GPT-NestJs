import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InputModelDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'prompt must be informed' })
  prompt: string;
}
