import { DefaultPipe } from './default.pipe';

describe('Pipe: Default', () => {
    let pipe: DefaultPipe;

    beforeEach(() => {
      pipe = new DefaultPipe();
    });
    // nếu pipe không nhận được đầu vào thì nó sẽ trả về giá trị mặc định, như vậy
    it('providing no value returns fallback', () => {
        expect(pipe.transform('', 'http://place-hold.it/300'))
        .toBe('http://place-hold.it/300');
    });
  });
