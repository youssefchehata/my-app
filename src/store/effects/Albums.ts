
import { Dispatch } from 'redux';
import { AlbumActionTypes } from '../action-types/AlbumTypes';
import { getAlbumAction } from '../actions/albumActions';

export const getAlbums = (userId:number) => {
console.log("userIdget",userId)
  return function (dispatch: Dispatch<AlbumActionTypes>) {
    const POST_URL = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getAlbumAction(data));
        return data;
      });
  };
};