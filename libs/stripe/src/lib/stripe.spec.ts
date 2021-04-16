import { stripe } from './stripe';

describe('stripe', () => {
  it('should work', () => {
    expect(stripe()).toEqual('stripe');
  });
});
