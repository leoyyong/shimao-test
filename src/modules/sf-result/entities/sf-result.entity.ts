import { Common } from '../../../entity/common.entity';
import { PushSfType } from '../../sf-push/dto/push-sf-push.dto';
import { Column, DeleteDateColumn, Entity } from 'typeorm';

export enum SfResultState {
  'push_start' = 'push_start',
  'push_success' = 'push_success',
  'push_fail' = 'push_fail',
  'receive_response_id' = 'receive_response_id',
  'receive_success' = 'receive_success',
}

@Entity()
export class SfResult extends Common {
  @DeleteDateColumn()
  deletedAt?: Date;

  // 阶段Id
  @Column('varchar')
  stageId: string;

  // 客户Id
  @Column('varchar')
  mainOwnerId: string;

  // owner 客户信息
  @Column('simple-json')
  user: string;

  // 问卷链接
  @Column('varchar', { nullable: true })
  url?: string;

  // 问卷id
  @Column('varchar')
  surveyId: string;

  // 状态
  @Column({
    type: 'enum',
    enum: SfResultState,
  })
  resultState: SfResultState;

  // 问卷系统问卷回收id
  @Column('varchar', { nullable: true })
  resultId?: string;

  // 默认headers
  @Column('simple-json', { nullable: true })
  headers?: string;

  // 问卷答案内容
  @Column('simple-json', { nullable: true })
  cells?: string;

  @Column({
    type: 'enum',
    enum: PushSfType,
    nullable: true,
  })
  latestPushBy?: PushSfType;
}
