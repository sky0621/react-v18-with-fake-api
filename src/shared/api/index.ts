import ky, { Options } from 'ky';
import API_URL from '../config';

const defaultOptions: Options = {
  prefixUrl: API_URL,
  retry: {
    limit: 3,
    methods: ['get'],
    statusCodes: [413],
  },
  timeout: 5000,
};

const apiClient = ky.create(defaultOptions);

export default apiClient;
