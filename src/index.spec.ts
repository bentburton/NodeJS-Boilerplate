import { helloWorld } from '.';

describe('Hello World', () => {
  test('it should return the string hello world', () => {
    expect(helloWorld()).toBe('Hello World');
  });
});
