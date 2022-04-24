import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export enum SyncType {
  'all' = 'all',
  'latest_day' = 'latest_day',
  'result_id' = 'result_id',
}

export class SyncSfResultDto {
  @IsString()
  @IsOptional()
  stageId?: string;
  @IsEnum(SyncType)
  type: SyncType;
  @IsNumberString()
  @IsOptional()
  day?: number;
  @IsString()
  @IsOptional()
  resultIds?: string[];
}
