const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`${key} is required`);
  }

  return process.env[key] || '';
};

const API_URL = getEnvVar('REACT_APP_FAKE_API_URL');

export default API_URL;
