<p align="center">
  <a href="https://github.com/adamgrieger/spotify-web-api-ts">
    <img src="assets/logo.svg" height="100">
  </a>

  <h3 align="center">spotify-web-api-ts-edge</h3>

  <p align="center">
    An isomorphic TypeScript wrapper for Spotify's Web API that can run on the edge
    <br />
    <a href="https://adamgrieger.github.io/spotify-web-api-ts/"><strong>View the docs »</strong></a>
    <br />
    <p align="center">
      <img alt="npm" src="https://badgen.net/npm/v/spotify-web-api-ts-edge"/>
      <img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/spotify-web-api-ts-edge">
      <img alt="license" src="https://badgen.net/github/license/YgorPerez/spotify-web-api-ts-edge">
    </p>
    <p align="center">
      <img alt="Master Workflow" src="https://github.com/YgorPerez/spotify-web-api-ts-edge/workflows/Master%20Workflow/badge.svg"/>
      <img alt="codecov" src="https://codecov.io/gh/YgorPerez/spotify-web-api-ts-edge/branch/master/graph/badge.svg"/>
      <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </p>
  </p>
</p>

### This is a fork from https://github.com/adamgrieger/spotify-web-api-ts

## Installation

### pnpm

```sh
pnpm add spotify-web-api-ts-edge
```

### yarn

```sh
yarn add spotify-web-api-ts-edge
```

### npm

```sh
npm install spotify-web-api-ts-edge
```

## Basic Example

```typescript
import { SpotifyWebApi } from 'spotify-web-api-ts';

const spotify = new SpotifyWebApi({ accessToken: '<YOUR_ACCESS_TOKEN_HERE>' });

const { artists } = await spotify.albums.getAlbum('1uzfGk9vxMXfaZ2avqwxod');

console.log(artists.map(artist => artist.name));
// Array [ "Against All Logic" ]
```
