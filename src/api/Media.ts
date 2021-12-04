import Base from './Base';

const endpoint = `${Base.endpoint}/media`;

// Move to types ???
interface Media {
  title: string,
  year: number,
  type: string
}
interface MediaGetParams {
    id?: number | string,
    titleLike?: string
}

interface MediaResp extends Response {
  error?: string,
  data?: { title: string, year: number, id: number, type: string},
  message?: string
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

// eslint-disable-next-line max-len
const create = async (params: Media): Promise<MediaResp> => Base.request(endpoint, {
  method: 'POST',
  body: JSON.stringify(params),
})
  .then((response) => response.json())
  .then((json) => json)
  .catch((error) => error);

export default {
  endpoint,
  get,
  create,
};
