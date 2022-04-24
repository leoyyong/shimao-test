import { Common } from '../../../../entity/common.entity';
import { Stage } from '../../../stage/entities/stage.entity';
import { Column, Entity } from 'typeorm';

export type Source = 'aliyun' | 'ym';

@Entity()
export class MobileTemplate extends Common {
  @Column('varchar', { unique: true })
  name: string;
  @Column('varchar', { nullable: true })
  description: string;

  // 手机模板来源
  @Column('varchar', { default: 'ym' })
  source: Source;

  // aliyun 短信模板
  @Column('varchar', { nullable: true })
  templateCode?: string;
  // aliyun 模板签名
  @Column('varchar', { nullable: true })
  signName?: string;
  // 模板使用的关键字,使用 & 进行分割
  // 比如: key={{survey}}&key2={{mobile}}，key对应到手机模板中的参数名
  // 比如: sendcloud模板中 %reviewer_name%和 %collector_name% ，则这里key 为 reviewer_name 和 collector_name
  // 那么: reviewer_name={{survey}}&collector_name={{mobile}}
  @Column('varchar', { nullable: true })
  keys?: string;

  @Column('varchar', { nullable: true })
  redirectUrl?: string;

  @Column('varchar', { nullable: true })
  content?: string;

  stage?: Stage
}
