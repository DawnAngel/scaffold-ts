import {Main } from './main';

describe('Main', () => {
  let sut: Main;

  beforeEach(() => {
    sut = new Main();
  });

  it('should instantiate', () => {
    expect(sut).toBeTruthy();
  });
});
