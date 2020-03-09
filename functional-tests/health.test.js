import config from '../src/config';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import { message } from '../src/api/health';

describe('Smoke test', () => {
  it('health endpoint returns matching data', async () => {
    const healthUrl = `${config.url}/health`;
    const res = await axios.get(healthUrl, adapter);

    expect(res.data).toEqual(message);
  });
});