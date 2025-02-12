import { AdultCheckingPipe } from './adult-checking.pipe';

describe('AdultCheckingPipe', () => {
  it('create an instance', () => {
    const pipe = new AdultCheckingPipe();
    expect(pipe).toBeTruthy();
  });
});
