import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {
  let sut: HelloWorld;

  beforeEach(() => {
    sut = new HelloWorld();
  });

  it('should instantiate', () => {
    expect(sut).toBeTruthy();
  });

  it('should run', () => {
    expect(sut.run()).toBe('Hello World!');
  });
});
