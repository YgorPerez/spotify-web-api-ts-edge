import axios, { AxiosError, type AxiosRequestConfig, type Method } from 'axios';
import { BASE_API_URL } from '../constants';

export type SpotifyAxiosConfig = AxiosRequestConfig & { contentType?: string };

export async function spotifyAxios<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: SpotifyAxiosConfig,
) {
  try {
    const { contentType, ...axiosConfig } = config ?? {};
    const response = await axios({
      ...axiosConfig,
      baseURL: BASE_API_URL,
      adapter: 'fetch',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': contentType ?? 'application/json',
      },
      url,
      method,
    });
    return response.data as T;
  } catch (error) {
    const err = error as AxiosError;
    throw new AxiosError(
      err.message,
      err.code,
      err.config,
      err.request,
      err.response,
    );
  }
}
