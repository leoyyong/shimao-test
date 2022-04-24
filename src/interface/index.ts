export interface IShimaoResult<T> {
  success: boolean;
  code: null | string;
  error: null | string;
  result: T;
}

export interface IAuthenticationForSF {
  access_token: string;
  instance_url: string;
  id: string;
  token_type: string;
  issued_at: string;
  signature: string;
}

interface IHomeOwners {
  sfid: string;
  projectId: string;
  projectName: string;
  orgId: string;
  realEstate: string;
  stageNm: string;
  floor: string;
  unitNm: string;
  buildNumber: string;
  homeInfo: string;
  mainOwnerId: string;
  mainOwnerName: string;
  mainOwnerTel: string;
}

export interface IHomeOwnerListForSFPayload {
  homeownerList: IHomeOwners[];
}

export interface ISmQueryPurchaseContractPayload {
  orgId: string;
  repossessTime: string;
  pageNumber: number;
}

export interface IPur {
  wechatOpenid: string;
  unitNm: string;
  stakeholder: string;
  stageNm: string;
  sfId: string;
  repossessTime: string;
  realEstate: string;
  projectName: string;
  projectId: string;
  orgId: string;
  mainOwnerTel: string;
  mainOwnerName: string;
  mainOwnerId: string;
  homeInfo: string;
  floor: string;
  buildNumber: string;
  Area: string;
}
export interface ISmQueryPurchaseContractResult {
  message: string;
  data: {
    totalCount: number;
    purList: IPur[];
    page: number;
  };
  code: string;
}

export interface IWeixinPushTemplateMessagePayload<T> {
  touser: string;
  template_id: string;
  url?: string;
  miniprogram?: {
    appid: string;
    pagepath: string;
  };
  data: T;
  // data: {
  //   first: {
  //     value: string;
  //     color: string;
  //   };
  //   keyword1: {
  //     value: string;
  //     color: string;
  //   };
  //   keyword2: {
  //     value: string;
  //     color: string;
  //   };
  //   keyword3: {
  //     value: string;
  //     color: string;
  //   };
  //   remark: {
  //     value: string;
  //     color: string;
  //   };
  // };
}

export interface IWeixinResponse {
  errcode: number;
  errmsg: string;
  msgid: number;
}

export interface IResultList<T> {
  // 0 代表正常返回,其他代码代表错误
  code: number;
  message: string;
  data: {
    page: number;
    count: number;
    list: T;
    pageSize: number;
  };
}

export interface IResult<T> {
  // 0 代表正常返回,其他代码代表错误
  code: number;
  message: string;
  data?: T;
  count?: number;
}

export interface IKv {
  [prop: string]: string;
}

export interface IReceiveQuestionnairePayload extends IKv {
  QuestionnaireTemplate: string;
  account: string;
  eProject: string;
  CustomizeType: string;
}

export interface ISendRes {
  state: boolean;
  pushErrorRes?: string;
  code?: number;
}

export interface IYMMobileInfo {
  smsId: string;
  mobile: string;
  customSmsId: null | string;
}

export interface IYMRes {
  code: string;
  data: IYMMobileInfo[];
  msg?: string;
}

export interface IMyMembership {
  accepted_at: string;
  id: number;
  is_owner: boolean;
  permissions: string[];
  role_id: number;
}
