import axios, { AxiosResponse } from 'axios';
import { IResult } from 'src/interface';
import { QuerySfResultFroSfRespDto } from 'src/modules/sf-result/dto/query-sf-result-for-sf-resp.dto';
import { QuerySfResultForSfDto } from 'src/modules/sf-result/dto/query-sf-result-for-sf.dto';
import { server, user } from './test';

let jwt: string;

describe('test sf-result', () => {
  beforeAll(async () => {
    const res: AxiosResponse<IResult<{ access_token: string }>> =
      await axios.post(`${server}/auth/login`, user);

    const { access_token } = res.data.data;
    // expect(res.data.code).toBe(0);
    jwt = access_token;
  });

  it('/sf-result (get)', async () => {
    const url = `${server}/sf-result`;
    const payload: QuerySfResultForSfDto = {
      stageId: '8701fa28-9186-48eb-aa80-be8cd0d7115b',
      surveyId: '0c65a24e-1a69-45f7-bfed-cb4d9157e417',
      mainOwnerId: 'a245D000000EZXmQAO',
      page: '1',
      pageSize: '10',
    };

    const res: AxiosResponse<IResult<QuerySfResultFroSfRespDto>> =
      await axios.request({
        url,
        method: 'get',
        params: payload,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    expect(res.data.data.count).toBe(1);
  });
});
