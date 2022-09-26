import { helloWorldFn } from './index';

describe('helloWorldFn', () => {
  it('Must return Hello world!', () => {
    expect(helloWorldFn()).toBe('Hello world!');
  });
});
