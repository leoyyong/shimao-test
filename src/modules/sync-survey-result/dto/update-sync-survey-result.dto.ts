import { PartialType } from '@nestjs/mapped-types';
import { CreateSyncSurveyResultDto } from './create-sync-survey-result.dto';

export class UpdateSyncSurveyResultDto extends PartialType(
  CreateSyncSurveyResultDto,
) {}
