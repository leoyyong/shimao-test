import { Common } from './common.entity';
import { Column } from 'typeorm';

export type Cycle = 'year' | 'month' | 'week' | 'day';

export type State = 'ready' | 'send' | 'processing' | 'finish' | 'stop';

export type From = 'salesforce' | 'import';

export class TaskBase extends Common {
  @Column('varchar', { nullable: true })
  description: string;

  // 问卷地址
  @Column('varchar')
  survey: string;

  @Column('varchar', { nullable: true })
  args?: string;

  // 周期:年、月、周、时、分
  @Column('varchar')
  cycle: Cycle;

  // 没年第*月
  @Column('int', { nullable: true })
  monthOfYear?: number;

  // 每月第*天
  @Column('int', { nullable: true })
  dayOfMonth?: number;

  // 星期几
  @Column('int', { nullable: true })
  dayOfWeek?: number;

  // 小时
  @Column('int')
  hour: number;

  // 分钟
  @Column('int')
  minute: number;

  // // 周期任务状态
  // @Column('varchar', { default: 'ready' })
  // state: State;

  // 销售组织代码
  @Column('varchar', { nullable: true })
  orgId: string;

  // 前*天售楼日。如果设置为1，需要在推送前计算 repossessTime 的值，当前日期减去此值获得
  @Column('int')
  repossessDayBefore: number;

  // 微信模板消息id(数据库中的id)
  @Column('uuid')
  wxTemplateId: string;

  // 手机模板消息id(数据库中的id)
  @Column('uuid')
  mobileTemplateId: string;

  @Column('uuid', { nullable: true })
  taskUserId: string;

  @Column('varchar', { nullable: true })
  from: From;

  // wxTemplate?: WxTemplate;
  // mobileTemplate?: MobileTemplate;
  // taskUser?: TaskUser;
}
