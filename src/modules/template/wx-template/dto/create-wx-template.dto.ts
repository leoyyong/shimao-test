import { IsNotEmpty } from 'class-validator';

export class CreateWxTemplateDto {
  @IsNotEmpty()
  name: string;
  description: string;
  redirectUrl?: string | null;
  @IsNotEmpty()
  wxTempId: string;
  // 模板使用的关键字,使用 & 进行分割 比如: key={{survey}}&key2={{mobile}}
  keys: string;
  canResend?: boolean;
  resendInterval?: number;
}
