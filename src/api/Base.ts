const endpoint = 'http://localhost:3000/v1';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = (url: string, options: any): Promise<Response> => {
  const args = { ...options, mode: 'cors', headers };
  return fetch(url, args);
};

const objToQueryString = (obj: any): string => {
  let queryString = '?';
  Object.keys(obj).forEach((key) => {
    queryString = queryString.concat(`${key}=${obj[`${key}`]}&`);
  });
  return queryString;
};

const Base = {
  request,
  headers,
  endpoint,
  objToQueryString,
};

export default Base;
