
import { AlbumActionTypes, GET_ALBUMS } from '../action-types/AlbumTypes';
import { Album } from '../interfaces/album';

export const getAlbumAction = (albums: Album[]): AlbumActionTypes => {
  return {
    type: GET_ALBUMS,
    payload: albums
  };
};