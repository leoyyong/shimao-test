import { ISurvey } from '@choiceform/os-api';
import { ILayout } from '@choiceform/os-api/dist/es6/data-grid';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResp {
  user: IUser;
  jwt: string;
}

export interface IUser {
  user_id: number;
  team_id: number | null;
  plan: string;
  id: number;
}

export interface IHeaderRowResp {
  survey_id: string;
  headers: IHeader[];
  anchors: null;
  creator_id: null;
  default: boolean;
  filter_id: number;
  id: number;
  inserted_at: string;
  name: string;
}

export interface IHeader {
  type: string;
  title: string | null;
  sub_headers: ISubHeader[];
  pos: number;
  // options: IOption[];
  number: string;
  node_id: string;
  loop_once: boolean;
  local_id: string;
  label: string | null;
  // extra: IExtra;
  custom_field_id: string | null;
}

export interface ISubHeader {
  type: string;
  text: string;
  pos: number;
  option_id: string | null;
  local_id: string;
  label: string | null;
  customized_text: string | null;
}

export interface IBodyRowsResp {
  page_info: IPageInfo;
  items: IBodyRow[];
}

export interface IPageInfo {
  type: string;
  total_pages: number;
  total_count: number;
  page_size: number;
  current: number;
}

export interface IBodyRow {
  response: IResponse;
  cells: ICell[];
}

export interface IResponse {
  status: string;
  quota_id: string;
  id: string;
}

export interface ICell {
  type: string;
  local_id: string;
  values: (string | number | null)[];
}

export interface ISurveysResp {
  page_info: IPageInfo;
  items: ISurvey[];
}

export interface ILayoutsResp {
  items: ILayout[];
}

export type ICondition =
  | IConditionOfCommittedAt
  | IConditionOfIn
  | IConditionOfStatusIn;

// type ConditionType =
//   | 'response.status_in'
//   | 'collector.in'
//   | 'committed_at.relative';

export interface IConditionOfStatusIn {
  type: string;
  op: 'response.status_in';
  loop_once: boolean;
  logic: null;
  id: string;
  conditions: [];
  args: {
    statuses: ['committed', 'test'];
    min_value: null;
    max_value: null;
    ids: null;
  };
}

export interface IConditionOfIn {
  type: string;
  op: 'response.id_in';
  loop_once: boolean;
  logic: null;
  id: string;
  conditions: [];
  args: {
    statuses: null;
    min_value: null;
    max_value: null;
    ids: ['123455'];
  };
}

export interface IConditionOfCommittedAt {
  type: string;
  op: 'committed_at.relative';
  loop_once: boolean;
  logic: null;
  id: string;
  conditions: [];
  args: {
    value: number;
    timezone_offset: '+08:00';
    period: 'day';
    end_at: null;
    begin_at: null;
  };
}

export interface IGetBodyRowsByConditionQuery {
  jwt: string;
  layoutId: number;
  page: number;
  pageSize: number;
  condition?: ICondition;
}
