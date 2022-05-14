import { createConsoleDebugLog } from '../index';

describe('app/log/index', () => {
  describe('createConsoleDebugLog', () => {
    describe('zero kind parameter', () => {
      test('no parameter', () => {
        expect(createConsoleDebugLog()).toEqual('PASS');
      });
    });

    describe('one kind parameter', () => {
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
      test('only one string arg parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, 'got response'),
        ).toEqual('got response');
      });
      test('only one string array arg parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, ['one', 'two']),
        ).toEqual('["one","two"]');
      });
      test('only one object arg parameter', () => {
        expect(
          createConsoleDebugLog(undefined, undefined, {
            id: 1,
            name: 'taro',
            isAdmin: true,
          }),
        ).toEqual('{"id":1,"name":"taro","isAdmin":true}');
      });
      test('only one string and one string array and one object args parameter', () => {
        expect(
          createConsoleDebugLog(
            undefined,
            undefined,
            'got response',
            ['one', 'two'],
            { id: 1, name: 'taro', isAdmin: true },
          ),
        ).toEqual(
          'got response\n["one","two"]\n{"id":1,"name":"taro","isAdmin":true}',
        );
      });
    });

    describe('two kind parameters', () => {
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

    describe('full kind parameters', () => {
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
      test('only one string and one string array and one object args parameter', () => {
        expect(
          createConsoleDebugLog(
            'pages/Home',
            'getUsers',
            'got response',
            ['one', 'two'],
            { id: 1, name: 'taro', isAdmin: true },
          ),
        ).toEqual(
          '[ pages/Home ][ getUsers ]\ngot response\n["one","two"]\n{"id":1,"name":"taro","isAdmin":true}',
        );
      });
    });
  });
});
