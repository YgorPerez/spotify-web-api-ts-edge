import axios from 'axios';
import { BASE_API_URL } from '../constants';
import { spotifyAxios } from './spotifyAxios';

jest.mock('axios');

const axiosMock = axios as unknown as jest.Mock;

describe('spotifyAxios', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should successfully call Spotify's Web API with the default content type", async () => {
    axiosMock.mockResolvedValue({ data: 'foo' });
    await spotifyAxios('foo', 'GET', 'token', {
      params: {
        bar: 'baz',
      },
    });
    expect(axiosMock).toHaveBeenCalledWith({
      params: {
        bar: 'baz',
      },
      adapter: 'fetch',
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      url: 'foo',
      method: 'GET',
    });
  });

  it("should successfully call Spotify's Web API with a custom content type", async () => {
    axiosMock.mockResolvedValue({ data: 'foo' });
    await spotifyAxios('foo', 'GET', 'token', {
      contentType: 'image/jpeg',
      data: 'bar',
    });
    expect(axiosMock).toHaveBeenCalledWith({
      data: 'bar',
      adapter: 'fetch',
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'image/jpeg',
      },
      url: 'foo',
      method: 'GET',
    });
  });
});
