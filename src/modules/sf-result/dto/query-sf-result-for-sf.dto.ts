import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { SfResultState } from '../entities/sf-result.entity';

export class QuerySfResultForSfDto {
  @IsString()
  stageId: string;

  @IsString()
  @IsOptional()
  surveyId: string;

  @IsString()
  @IsOptional()
  mainOwnerId: string;

  @IsEnum(SfResultState)
  @IsOptional()
  state?: SfResultState;

  @IsNumberString()
  @IsOptional()
  page: string;

  @IsNumberString()
  @IsOptional()
  pageSize: string;
}
