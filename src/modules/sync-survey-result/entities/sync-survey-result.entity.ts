import { Column, Entity } from 'typeorm';
import { Common } from '../../../entity/common.entity';

@Entity()
export class SyncSurveyResult extends Common {
  @Column('varchar')
  surveyId: string;
  @Column('int8')
  total: number;
}
