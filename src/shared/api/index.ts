import ky, { Options } from 'ky';
import API_URL from '../config';

const defaultOptions: Options = {
  prefixUrl: API_URL,
};

const apiInstance = ky.create(defaultOptions);
