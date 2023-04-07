import { spotifyFetch, type SpotifyFetchConfig } from './spotifyFetch';

export class Http {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  get<T>(url: string, config?: SpotifyFetchConfig) {
    return spotifyFetch<T>(url, 'GET', this.accessToken, config);
  }

  post<T>(url: string, config?: SpotifyFetchConfig) {
    return spotifyFetch<T>(url, 'POST', this.accessToken, config);
  }

  put<T>(url: string, config?: SpotifyFetchConfig) {
    return spotifyFetch<T>(url, 'PUT', this.accessToken, config);
  }

  delete<T>(url: string, config?: SpotifyFetchConfig) {
    return spotifyFetch<T>(url, 'DELETE', this.accessToken, config);
  }
}
