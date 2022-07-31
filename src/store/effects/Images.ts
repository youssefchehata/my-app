
import { Dispatch } from 'redux';
import { ImageActionTypes } from '../action-types/ImageTypes.';
import { getImageAction } from '../actions/imageActions';

export const getImages = (albumId:number) => {

  return function (dispatch: Dispatch<ImageActionTypes>) {
    const POST_URL = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getImageAction(data));
        return data;
      });
  };
};