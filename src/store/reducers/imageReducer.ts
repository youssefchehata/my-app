

import { GET_IMAGES,ImageActionTypes, GetImagesStateType } from "../action-types/ImageTypes.";

  
  const initialStateGetAlbums: GetImagesStateType = {
    images: []
  };
  
  export const getImagesReducer = (
    state = initialStateGetAlbums,
    action: ImageActionTypes
  ): GetImagesStateType => {
    switch (action.type) {
      case GET_IMAGES:
        return {
          ...state,
          images: action.payload
        };
      default:
        return state;
    }
  };





