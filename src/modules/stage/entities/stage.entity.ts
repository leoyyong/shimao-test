import { MobileTemplate } from '../../template/mobile-template/entities/mobile-template.entity';
import { WxTemplate } from '../../template/wx-template/entities/wx-template.entity';
import { Column, DeleteDateColumn, Entity, Index, ManyToOne } from 'typeorm';
import { Common } from '../../../entity/common.entity';

@Entity()
export class Stage extends Common {
  @DeleteDateColumn()
  deletedAt?: Date;

  @Column('varchar', {
    unique: true,
  })
  @Index()
  name: string;
  @Column('varchar', {
    nullable: true,
  })
  desc: string;
  @Column('varchar')
  surveyId: string;
  @Column('varchar', { default: '' })
  url: string;
  @Column('uuid')
  wxTemplateId: string;
  @ManyToOne(() => WxTemplate, (wxTemplate) => wxTemplate.stage)
  wxTemplate: WxTemplate;
  @Column('uuid')
  mobileTemplateId: string;
  @ManyToOne(() => MobileTemplate, (mobileTemplate) => mobileTemplate.stage)
  mobileTemplate: MobileTemplate;
}
