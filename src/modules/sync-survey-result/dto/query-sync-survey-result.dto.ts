import { IsString } from 'class-validator';

export class QuerySyncSurveyResultDto {
  @IsString()
  surveyId: string;
}
