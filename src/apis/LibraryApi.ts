import { type Http } from '../helpers/Http';
import {
  type GetSavedAlbumsOptions,
  type GetSavedShowsOptions,
  type GetSavedTracksOptions,
  type RemoveSavedShowsOptions,
} from '../types/SpotifyOptions';
import {
  type GetSavedAlbumsResponse,
  type GetSavedShowsResponse,
  type GetSavedTracksResponse,
} from '../types/SpotifyResponses';

export class LibraryApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Check User's Saved Albums
   *
   * Check if one or more albums are saved in the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  areAlbumsSaved(albumIds: string[]): Promise<boolean[]> {
    return this.http.get<boolean[]>('/me/albums/contains', {
      params: {
        ids: albumIds,
      },
    });
  }

  /**
   * Check User's Saved Shows
   *
   * Check if one or more shows are saved in the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   */
  areShowsSaved(showIds: string[]): Promise<boolean[]> {
    return this.http.get<boolean[]>('/me/shows/contains', {
      params: {
        ids: showIds,
      },
    });
  }

  /**
   * Check User's Saved Tracks
   *
   * Check if one or more tracks are saved in the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  areTracksSaved(trackIds: string[]): Promise<boolean[]> {
    return this.http.get<boolean[]>('/me/tracks/contains', {
      params: {
        ids: trackIds,
      },
    });
  }

  /**
   * Get the Current User's Saved Albums
   *
   * Get a list of albums saved in the current user's library.
   *
   * @param options Optional request information.
   */
  getSavedAlbums(
    options?: GetSavedAlbumsOptions,
  ): Promise<GetSavedAlbumsResponse> {
    return this.http.get<GetSavedAlbumsResponse>(
      '/me/albums',
      options && { params: options },
    );
  }

  /**
   * Get the Current User's Saved Shows
   *
   * Get a list of shows saved in the current user's library.
   *
   * @param options Optional request information.
   */
  getSavedShows(
    options?: GetSavedShowsOptions,
  ): Promise<GetSavedShowsResponse> {
    return this.http.get<GetSavedShowsResponse>(
      '/me/shows',
      options && { params: options },
    );
  }

  /**
   * Get the Current User's Saved Tracks
   *
   * Get a list of tracks saved in the current user's library.
   *
   * @param options Optional request information.
   */
  getSavedTracks(
    options?: GetSavedTracksOptions,
  ): Promise<GetSavedTracksResponse> {
    return this.http.get<GetSavedTracksResponse>(
      '/me/tracks',
      options && { params: options },
    );
  }

  /**
   * Check User's Saved Albums
   *
   * Check if an album is saved in the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  async isAlbumSaved(albumId: string): Promise<boolean | undefined> {
    const response = await this.areAlbumsSaved([albumId]);
    return response[0];
  }

  /**
   * Check User's Saved Shows
   *
   * Check if a show is saved in the current user's library.
   *
   * @param showId The Spotify ID of the show.
   */
  async isShowSaved(showId: string): Promise<boolean | undefined> {
    const response = await this.areShowsSaved([showId]);
    return response[0];
  }

  /**
   * Check User's Saved Tracks
   *
   * Check if a track is saved in the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  async isTrackSaved(trackId: string): Promise<boolean | undefined> {
    const response = await this.areTracksSaved([trackId]);
    return response[0];
  }

  /**
   * Remove Album for the Current User
   *
   * Remove an album from the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  removeSavedAlbum(albumId: string): Promise<void> {
    return this.removeSavedAlbums([albumId]);
  }

  /**
   * Remove Albums for the Current User
   *
   * Remove one or more albums from the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  removeSavedAlbums(albumIds: string[]): Promise<void> {
    return this.http.delete<void>('/me/albums', {
      data: {
        ids: albumIds,
      },
    });
  }

  /**
   * Remove Show for the Current User
   *
   * Remove a show from the current user's library.
   *
   * @param showId The Spotify ID of the show.
   * @param options Optional request information.
   */
  removeSavedShow(
    showId: string,
    options?: RemoveSavedShowsOptions,
  ): Promise<void> {
    return this.removeSavedShows([showId], options);
  }

  /**
   * Remove Shows for the Current User
   *
   * Remove one or more shows from the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   * @param options Optional request information.
   */
  removeSavedShows(
    showIds: string[],
    options?: RemoveSavedShowsOptions,
  ): Promise<void> {
    return this.http.delete<void>('/me/shows', {
      params: {
        ...options,
        ids: showIds,
      },
    });
  }

  /**
   * Remove Track for the Current User
   *
   * Remove a track from the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  removeSavedTrack(trackId: string): Promise<void> {
    return this.removeSavedTracks([trackId]);
  }

  /**
   * Remove Tracks for the Current User
   *
   * Remove one or more tracks from the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  removeSavedTracks(trackIds: string[]): Promise<void> {
    return this.http.delete<void>('/me/tracks', {
      data: {
        ids: trackIds,
      },
    });
  }

  /**
   * Save Album for the Current User
   *
   * Save an album to the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  saveAlbum(albumId: string): Promise<void> {
    return this.saveAlbums([albumId]);
  }

  /**
   * Save Albums for the Current User
   *
   * Save one or more albums to the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  saveAlbums(albumIds: string[]): Promise<void> {
    return this.http.put<void>('/me/albums', {
      data: {
        ids: albumIds,
      },
    });
  }

  /**
   * Save Show for the Current User
   *
   * Save a show to the current user's library.
   *
   * @param showId The Spotify ID of the show.
   */
  saveShow(showId: string): Promise<void> {
    return this.saveShows([showId]);
  }

  /**
   * Save Shows for the Current User
   *
   * Save one or more shows to the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   */
  saveShows(showIds: string[]): Promise<void> {
    return this.http.put<void>('/me/shows', {
      params: {
        ids: showIds,
      },
    });
  }

  /**
   * Save Track for the Current User
   *
   * Save a track to the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  saveTrack(trackId: string): Promise<void> {
    return this.saveTracks([trackId]);
  }

  /**
   * Save Tracks for the Current User
   *
   * Save one or more tracks to the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  saveTracks(trackIds: string[]): Promise<void> {
    return this.http.put<void>('/me/tracks', {
      data: {
        ids: trackIds,
      },
    });
  }
}
