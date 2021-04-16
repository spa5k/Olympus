import { mail } from './mail';

describe('mail', () => {
  it('should work', () => {
    expect(mail()).toEqual('mail');
  });
});
