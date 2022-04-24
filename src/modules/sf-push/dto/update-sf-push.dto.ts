import { PartialType } from '@nestjs/mapped-types';
import { CreateSfPushDto } from './create-sf-push.dto';

export class UpdateSfPushDto extends PartialType(CreateSfPushDto) {}
