const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is required`);
  }

  return process.env[key] || '';
};

export const API_URL = getEnvVar('REACT_APP_API_URL');
export const AUTH_KEY = getEnvVar('REACT_APP_AUTH_KEY');
export const DEBUG = getEnvVar('REACT_APP_DEBUG') === 'true';
