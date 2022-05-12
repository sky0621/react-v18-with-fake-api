import { consoleDebugLog2 } from '../index';

describe('test', () => {
  test('name', () => {
    expect(consoleDebugLog2('fp', 'fn')()).toBeCalled();
  });
});
