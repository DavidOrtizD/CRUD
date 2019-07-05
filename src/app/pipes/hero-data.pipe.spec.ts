import { HeroDataPipe } from './hero-data.pipe';

describe('HeroDataPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroDataPipe();
    expect(pipe).toBeTruthy();
  });
});
