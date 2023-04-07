import { BASE_API_URL } from '../constants';

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export interface FetchRequestConfig<D = any> {
  url?: string;
  method?: Method | string;
  baseURL?: string;
  headers?: Headers;
  params?: any;
  data?: D;
}

export type SpotifyFetchConfig = FetchRequestConfig & { contentType?: string };

export async function spotifyFetch<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: SpotifyFetchConfig,
) {
  try {
    const { contentType, ...fetchConfig } = config ?? {};
    const fullUrl = `${BASE_API_URL}${url}?${new URLSearchParams(
      fetchConfig.params,
    ).toString()}`;
    const response = await fetch(fullUrl, {
      body: method === 'POST' ? JSON.stringify(fetchConfig.data) : undefined,
      ...fetchConfig.headers,
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': contentType ?? 'application/json',
      }),
      method,
    });
    return response.json() as T;
  } catch (error) {
    throw Error(error as string);
  }
}
