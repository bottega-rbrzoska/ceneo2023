import { EmptyPipe } from './empty.pipe';

describe('EmptyPipe', () => {
  let pipe: EmptyPipe;
  beforeEach(() => {
    pipe = new EmptyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms empty value to given fallback', () => {
    expect(pipe.transform(null, 'emptyFallback')).toBe('emptyFallback');
  });
});
