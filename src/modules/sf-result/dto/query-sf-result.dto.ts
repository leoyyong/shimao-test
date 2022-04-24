import { SfResultState } from '../entities/sf-result.entity';

export class QuerySfResultDto {
  stageId?: string;
  surveyId?: string;
  mainOwnerId?: string;
  state?: SfResultState;
  page?: string;
  pageSize?: string;
}

export class QuerySfResultResp {
  id: 4209;
  survey_id: '23f2f663-4f9b-4bbe-a196-9f572347a1d3';
  headers: [
    {
      type: 'select';
      title: '区域';
      sub_headers: [
        {
          type: 'single_opt';
          text: '选项';
          pos: 1;
          id: 'cbe79508-df96-4978-86c6-a2c99cfab14e';
        },
      ];
      pos: 2;
      number: '1';
      id: 372661;
    },
    {
      type: 'select';
      title: '@根据您的经历，您觉得维保服务中存在以下哪些问题？（多选）';
      sub_headers: [
        {
          type: 'opt';
          text: ' 报修不方便、报修后响应不及时';
          pos: 1;
          id: '5c138e55-d92f-4f6a-84d1-12a912a2212f';
        },
        {
          type: 'opt';
          text: ' 维修过程中沟通不畅，没有反馈';
          pos: 2;
          id: 'ec739008-0b29-4b62-943f-0f41d08ed9d9';
        },
        {
          type: 'opt';
          text: ' 维修拖沓、用时过长';
          pos: 3;
          id: '10f0b8f1-1741-4e94-bcac-93c9065267fb';
        },
        {
          type: 'opt';
          text: ' 维修没有彻底解决问题';
          pos: 4;
          id: '35a14955-d038-466f-8204-415fb064a384';
        },
        {
          type: 'opt';
          text: ' 维修人员不专业，现场成品保护不好';
          pos: 5;
          id: '4440bb29-979e-40ed-9be5-d29d54ed08a3';
        },
      ];
      pos: 7;
      number: 'Q3';
      id: 361574;
    },
  ];
  answer: [
    {
      response: {
        id: '6772b761-5082-4a2a-984d-b9eea101a760';
        status: 'committed';
      };
      cells: [
        {
          values: ['海峡发展公司'];
          type: 'select';
        },
        {
          values: [null, null, null, null, null];
          type: 'select';
        },
      ];
    },
  ];
}
