export class QuerySfResultFroSfRespDto {
  stageId: string;
  url: string;
  headers: HeaderDto[];
  result: ResultDto[];
  count: number;
}

export class HeaderDto {
  type: string;
  title: string;
  sub_headers: SubHeadersDto[];
  pos: number;
  number: string;
}

export class ResultDto {
  mainOwnerId: string;
  state: string;
  resultId: string;
  resultState: string;
  cells: any[];
  url: string;
}

export class SubHeadersDto {
  type: string;
  text: string;
  pos: number;
}
