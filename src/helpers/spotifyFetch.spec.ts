/* eslint-disable jest/no-commented-out-tests */
// import fetch from 'jest-mock-fetch';
// import { BASE_API_URL } from '../constants';
// import { spotifyFetch } from './spotifyFetch';

// describe('spotifyFetch', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it("should successfully call Spotify's Web API with the default content type", async () => {
//     const catchFn = jest.fn();
//     const thenFn = jest.fn();
//     fetch.mockResolvedValue({ data: 'foo' });

//     await spotifyFetch('foo', 'GET', 'token', {
//       params: {
//         bar: 'baz',
//       },
//     })
//       .then(thenFn)
//       .catch(catchFn);

//     const fullUrl = `${BASE_API_URL}foo?${new URLSearchParams({
//       bar: 'baz',
//     }).toString()}`;

//     expect(fetch).toHaveBeenCalledWith(fullUrl, {
//       headers: {
//         Authorization: 'Bearer token',
//         'Content-Type': 'application/json',
//       },
//       method: 'GET',
//     });
//   });

//   it("should successfully call Spotify's Web API with a custom content type", async () => {
//     const catchFn = jest.fn();
//     const thenFn = jest.fn();
//     fetch.mockResolvedValue({ data: 'foo' });

//     await spotifyFetch('foo', 'GET', 'token', {
//       contentType: 'image/jpeg',
//       data: 'bar',
//     })      .then(thenFn)
//     .catch(catchFn);

//     const fullUrl = `${BASE_API_URL}foo?`;

//     expect(fetch).toHaveBeenCalledWith(fullUrl, {
//       data: 'bar',
//       headers: {
//         Authorization: 'Bearer token',
//         'Content-Type': 'image/jpeg',
//       },
//       method: 'GET',
//     });
//   });
// });
