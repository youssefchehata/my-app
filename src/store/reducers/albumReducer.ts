

import { GET_ALBUMS,AlbumActionTypes, GetAlbumsStateType } from "../action-types/AlbumTypes";

  
  const initialStateGetAlbums: GetAlbumsStateType = {
    albums: []
  };
  
  export const getAlbumsReducer = (
    state = initialStateGetAlbums,
    action: AlbumActionTypes
  ): GetAlbumsStateType => {
    switch (action.type) {
      case GET_ALBUMS:
        return {
          ...state,
          albums: action.payload
        };
      default:
        return state;
    }
  };