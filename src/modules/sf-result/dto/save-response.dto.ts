import { IsString } from 'class-validator';

export class SaveResponseDto {
  // 对应问卷系统的responseId
  @IsString()
  resultId: string;
  // sf-resultId
  @IsString()
  srid: string;
}
