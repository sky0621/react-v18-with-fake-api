import { createConsoleDebugLog } from '../index';

describe('app/log/index', () => {
  describe('createConsoleDebugLog', () => {
    describe('zero parameter', () => {
      test('no parameter', () => {
        expect(createConsoleDebugLog()).toEqual('PASS');
      });
    });

    describe('one parameter', () => {
      test('only filePath parameter', () => {
        expect(createConsoleDebugLog('pages/Home')).toEqual(
          '[ pages/Home ]\nPASS',
        );
      });
      test('only funcName parameter', () => {
        expect(createConsoleDebugLog(undefined, 'getUsers')).toEqual(
          '[ getUsers ]\nPASS',
        );
      });
      test('only string args parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, 'got response'),
        ).toEqual('got response');
      });
      test('only string array args parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, ['one', 'two']),
        ).toEqual('["one","two"]');
      });
      test('only object args parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, {
            id: 1,
            name: 'taro',
            isAdmin: true,
          }),
        ).toEqual('{"id":1,"name":"taro","isAdmin":true}');
      });
    });

    describe('two parameters', () => {
      test('filePath and funcName parameters', () => {
        expect(createConsoleDebugLog('pages/Home', 'getUsers')).toEqual(
          '[ pages/Home ][ getUsers ]\nPASS',
        );
      });
      test('filePath and arg parameters', () => {
        expect(
          createConsoleDebugLog('pages/Home', undefined, 'got response'),
        ).toEqual('[ pages/Home ]\ngot response');
      });
      test('funcName and arg parameters', () => {
        expect(
          createConsoleDebugLog(undefined, 'getUsers', 'got response'),
        ).toEqual('[ getUsers ]\ngot response');
      });
    });

    describe('full parameters', () => {
      test('filePath and funcName and string arg parameters', () => {
        expect(
          createConsoleDebugLog('pages/Home', 'getUsers', 'got response'),
        ).toEqual('[ pages/Home ][ getUsers ]\ngot response');
      });
      test('filePath and funcName and object args parameters', () => {
        expect(
          createConsoleDebugLog('pages/Home', 'getUsers', {
            id: 1,
            name: 'taro',
            isAdmin: true,
          }),
        ).toEqual(
          '[ pages/Home ][ getUsers ]\n{"id":1,"name":"taro","isAdmin":true}',
        );
      });
    });
  });
});
