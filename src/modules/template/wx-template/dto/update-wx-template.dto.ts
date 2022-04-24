import { PartialType } from '@nestjs/mapped-types';
import { CreateWxTemplateDto } from './create-wx-template.dto';

export class UpdateWxTemplateDto extends PartialType(CreateWxTemplateDto) {}
