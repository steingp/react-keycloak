import { adapterMock } from './adapter-mock.js';

describe('adapterMock', () => {
  it('should work', () => {
    expect(adapterMock()).toEqual('adapter-mock');
  });
});
