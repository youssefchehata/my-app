
import { Dispatch } from 'redux';
import { UtilisateurActionTypes } from '../action-types/UtilisateurTypes';
import { getUtilisateurAction } from '../actions/utilisateurActions';

export const getUtilisateurs = () => {
  return function (dispatch: Dispatch<UtilisateurActionTypes>) {
    const POST_URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getUtilisateurAction(data));
        return data;
      });
  };
};