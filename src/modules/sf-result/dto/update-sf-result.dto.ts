import { PartialType } from '@nestjs/mapped-types';
import { CreateSfResultDto } from './create-sf-result.dto';

export class UpdateSfResultDto extends PartialType(CreateSfResultDto) {}
