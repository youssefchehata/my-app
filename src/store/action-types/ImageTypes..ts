

import { Image } from '../interfaces/image';

export const GET_IMAGES = 'GET_IMAGES';

export interface GetImagesStateType {
  images: Image[];
}

interface GetImagesActionType {
  type: typeof GET_IMAGES;
  payload: Image[];
}
export type ImageActionTypes = GetImagesActionType;