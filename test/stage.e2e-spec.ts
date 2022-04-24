import axios, { AxiosResponse } from 'axios';
import { IResult } from 'src/interface';
import { CreateStageDto } from 'src/modules/stage/dto/create-stage.dto';
import { Stage } from 'src/modules/stage/entities/stage.entity';
import { server, user } from './test';

let newStage: Stage;
let jwt: string;

describe('test (e2e)', () => {
  beforeAll(async () => {
    const res: AxiosResponse<IResult<{ access_token: string }>> =
      await axios.post(`${server}/auth/login`, user);

    const { access_token } = res.data.data;
    // expect(res.data.code).toBe(0);
    jwt = access_token;
  });

  it('/stage (post)', async () => {
    // console.log('jwt :>> ', jwt);
    const url = server + '/stage';
    const payload: CreateStageDto = {
      name: 'test1',
      desc: 'test',
      surveyId: '3761854a-7554-4c79-855c-4fbd35519b9d',
      url: 'https://q.cform.io?EmoMWXP5',
      wxTemplateId: 'dc4cbe7d-6309-43f0-84bf-301961861589',
      mobileTemplateId: 'a3aaff98-8f54-4b68-abe4-91820fe73d34',
    };

    const res: AxiosResponse<IResult<Stage>> = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    // console.log(res.data);
    expect(res.status).toBe(201);
    newStage = res.data.data;
  });

  it('/stage (get)', async () => {
    const url = server + '/stage';
    const res: AxiosResponse<IResult<Stage[]>> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    expect(res.status).toBe(200);
    expect(res.data.data.length).toBe(6);
  });

  it('/stage (del)', async () => {
    const url = server + '/stage' + '/' + newStage.id;
    const res: AxiosResponse<IResult<null>> = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    // console.log(res.data);
    expect(res.status).toBe(200);
  });
});
