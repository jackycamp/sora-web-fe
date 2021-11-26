import Base from './Base';

const endpoint = `${Base.endpoint}/media`;

interface MediaGetParams {
    id?: number | string,
    titleLike?: string
}

// eslint-disable-next-line max-len
const get = async (params: MediaGetParams = {}): Promise<Response> => {
  const { id, ...rest } = params;

  const queryString = Base.objToQueryString(rest);
  let url = id ? `${endpoint}/${id}` : `${endpoint}`;
  url += queryString;

  return Base.request(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);
};

export default {
  endpoint,
  get,
};
