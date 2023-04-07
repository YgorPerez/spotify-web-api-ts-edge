import { Http } from './Http';
import { spotifyFetch } from './spotifyFetch';

jest.mock('./spotifyFetch');

const spotifyFetchMock = spotifyFetch as jest.Mock;

describe('Http', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should get and set the access token', () => {
    const http = new Http('token');
    expect(http.getAccessToken()).toBe('token');
    http.setAccessToken('newToken');
    expect(http.getAccessToken()).toBe('newToken');
  });

  describe('get', () => {
    it(`should correctly call spotifyFetch for GET requests (without config)`, () => {
      const http = new Http('token');
      http.get('foo');
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith(
        'foo',
        'GET',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyFetch for GET requests (with config)`, () => {
      const http = new Http('token');
      http.get('foo', {
        baseURL: 'bar',
      });
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith('foo', 'GET', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('post', () => {
    it(`should correctly call spotifyFetch for POST requests (without config)`, () => {
      const http = new Http('token');
      http.post('foo');
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith(
        'foo',
        'POST',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyFetch for POST requests (with config)`, () => {
      const http = new Http('token');
      http.post('foo', {
        baseURL: 'bar',
      });
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith('foo', 'POST', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('put', () => {
    it(`should correctly call spotifyFetch for PUT requests (without config)`, () => {
      const http = new Http('token');
      http.put('foo');
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith(
        'foo',
        'PUT',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyFetch for PUT requests (with config)`, () => {
      const http = new Http('token');
      http.put('foo', {
        baseURL: 'bar',
      });
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith('foo', 'PUT', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('delete', () => {
    it(`should correctly call spotifyFetch for DELETE requests (without config)`, () => {
      const http = new Http('token');
      http.delete('foo');
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith(
        'foo',
        'DELETE',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyFetch for DELETE requests (with config)`, () => {
      const http = new Http('token');
      http.delete('foo', {
        baseURL: 'bar',
      });
      expect(spotifyFetchMock).toHaveBeenCalledTimes(1);
      expect(spotifyFetchMock).toHaveBeenCalledWith('foo', 'DELETE', 'token', {
        baseURL: 'bar',
      });
    });
  });
});
