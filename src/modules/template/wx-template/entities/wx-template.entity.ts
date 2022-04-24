import { Common } from '../../../../entity/common.entity';
import { Stage } from '../../../stage/entities/stage.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class WxTemplate extends Common {
  @Column('varchar', { unique: true })
  name: string;
  @Column('varchar', { nullable: true })
  description: string;
  @Column('varchar', { nullable: true })
  redirectUrl?: string;
  // 微信公众号模板id
  @Column('varchar')
  weixinTempId: string;
  // 模板使用的关键字,使用 & 进行分割 比如: key={{survey}}&key2={{mobile}}|
  @Column('varchar')
  keys: string;

  @Column('bool', { default: false })
  canResend: boolean;

  @Column('int', { default: 0 })
  resendInterval: number;

  stage?: Stage;
}
