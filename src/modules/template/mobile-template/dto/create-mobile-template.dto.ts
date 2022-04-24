import { IsNotEmpty } from 'class-validator';
import { Source } from '../entities/mobile-template.entity';

export class CreateMobileTemplateDto {
  @IsNotEmpty()
  name: string;
  description: string;
  source: Source;
  templateCode?: string;
  signName?: string;
  // 模板使用的关键字,使用 & 进行分割
  // 比如: key={{survey}}&key2={{mobile}}，key对应到手机模板中的参数名
  // 比如: sendcloud模板中 %reviewer_name%和 %collector_name% ，则这里key 为 reviewer_name 和 collector_name
  // 那么: reviewer_name={{survey}}&collector_name={{mobile}}
  keys?: string;
  redirectUrl?: string;
  content?: string;
}
