import { IPur } from '../../../interface';

export enum PushSfType {
  'mobile_template' = 'mobile_template',
  'wechat_template' = 'wechat_template',
}

export class PushSfPushDto {
  stageId: string;
  type: PushSfType;
  user: IPur;
}
