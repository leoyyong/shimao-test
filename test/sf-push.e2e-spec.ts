import axios, { AxiosResponse } from 'axios';
import { server, user } from './test';
import { PushSfType } from '../src/modules/sf-push/dto/push-sf-push.dto';
import { IPur, IResult } from 'src/interface';
import { BatchPushSfPushDto } from 'src/modules/sf-push/dto/batch-push-sf-push.dto';

function getUserList(): IPur[] {
  const userList: IPur[] = [];
  for (let i = 0; i < 1; i++) {
    const user: IPur = {
      wechatOpenid: `wwww${i}`,
      unitNm: `test1-unitNm-${i}`,
      stakeholder: `test1-stakeholder-${i}`,
      stageNm: 'test1-stageNm',
      sfId: 'test1-sfid',
      repossessTime: new Date().toString(),
      realEstate: 'test1-realEstate',
      projectName: 'test1-projectname',
      projectId: 'test1-projectId',
      orgId: 'test1-orgid',
      mainOwnerId: `test1-mainOwnerId-${i}`,
      mainOwnerName: `test1-mainownername-${i}`,
      mainOwnerTel: '111222111',
      homeInfo: 'test1-homeInfo',
      floor: 'test1-floor',
      buildNumber: 'test1-buildNumber',
      Area: 'test1',
    };
    userList.push(user);
  }
  return userList;
}

let jwt: string;

describe('test sf-push', () => {
  beforeAll(async () => {
    const res: AxiosResponse<IResult<{ access_token: string }>> =
      await axios.post(`${server}/auth/login`, user);

    const { access_token } = res.data.data;
    // expect(res.data.code).toBe(0);
    jwt = access_token;
  });

  it('/sf-push/batch (post)', async () => {
    const url = `${server}/sf-push/batch`;
    const payload: BatchPushSfPushDto = {
      stageId: 'e052cb0a-55bf-4d6c-9be0-f8a6fa3858e0',
      type: 'wechat_template' as PushSfType,
      data: getUserList(),
    };
    const res: AxiosResponse<IResult<null>> = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    // console.log('sf-push/batch :>> ', res.data);
    expect(res.status).toBe(201);
    expect(res.data.code).toBe(0);
  });
});
