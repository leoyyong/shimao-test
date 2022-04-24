import { Common } from './common.entity';
import { Column } from 'typeorm';

export class Owner extends Common {
  @Column('varchar', { nullable: true })
  wechatOpenid?: string;
  @Column('varchar', { nullable: true })
  unitNm?: string;
  @Column('varchar', { nullable: true })
  stakeholder?: string;
  @Column('varchar', { nullable: true })
  stageNm?: string;
  @Column('varchar', { nullable: true })
  sfId?: string;
  @Column('varchar', { nullable: true })
  repossessTime?: string;
  @Column('varchar', { nullable: true })
  realEstate?: string;
  @Column('varchar', { nullable: true })
  projectId?: string;
  @Column('varchar', { nullable: true })
  projectName?: string;
  @Column('varchar', { nullable: true })
  orgId?: string;
  @Column('varchar', { nullable: true })
  mainOwnerTel?: string;
  @Column('varchar', { nullable: true })
  mainOwnerName?: string;
  @Column('varchar', { nullable: true })
  mainOwnerId?: string;
  @Column('varchar', { nullable: true })
  homeInfo?: string;
  @Column('varchar', { nullable: true })
  floor?: string;
  @Column('varchar', { nullable: true })
  buildNumber?: string;
  @Column('varchar', { nullable: true })
  Area?: string;
}
