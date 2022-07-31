
import { Album } from '../interfaces/album';

export const GET_ALBUMS = 'GET_ALBUMS';

export interface GetAlbumsStateType {
  albums: Album[];
}

interface GetAlbumsActionType {
  type: typeof GET_ALBUMS;
  payload: Album[];
}
export type AlbumActionTypes = GetAlbumsActionType;