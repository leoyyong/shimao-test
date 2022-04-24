import { IPur } from 'src/interface';
import { PushSfType } from './push-sf-push.dto';

export class BatchPushSfPushDto {
  stageId: string;
  type: PushSfType;
  data: IPur[];
}
