import axios from 'axios';
import { server } from './test';

describe('test (e2e)', () => {
  it('/ (get)', async () => {
    const res = await axios.get(`${server}`);
    // console.log(res.data);
    expect(res.data).toBe('Hello World!');
  });
});
