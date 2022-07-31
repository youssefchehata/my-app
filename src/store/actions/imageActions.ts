


import { GET_IMAGES, ImageActionTypes } from '../action-types/ImageTypes.';
import { Image } from '../interfaces/image';

export const getImageAction = (images: Image[]): ImageActionTypes => {
  return {
    type: GET_IMAGES,
    payload: images
  };
};