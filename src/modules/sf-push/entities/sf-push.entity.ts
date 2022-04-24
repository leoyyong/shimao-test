import { Common } from '../../../entity/common.entity';
import { Column, Entity, Index } from 'typeorm';
import { PushSfType } from '../dto/push-sf-push.dto';

@Entity()
export class SfPush extends Common {
  @Index()
  @Column('varchar', { nullable: true })
  mainOwnerId: string;

  @Column({
    type: 'enum',
    enum: PushSfType,
  })
  type: PushSfType;

  @Column('varchar', { nullable: true })
  sendTo: string;

  @Column('simple-json', { nullable: true })
  req: string;

  @Column('simple-json', { nullable: true })
  resp: string;

  @Index()
  @Column('uuid')
  sfResultId: string;
}
