
import createClient from './client';

describe('client', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should ...', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ ok: true }),
    });
    const baseUrl = 'http://foo.bar';
    const user = undefined; // {};
    const client = createClient(baseUrl, user);
    expect(await client('/')).toEqual({ ok: true });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://foo.bar/', {
      mode: 'cors',
      headers: {},
    });
  });
});