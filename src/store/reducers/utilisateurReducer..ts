
import { GET_UTILISATEURS,UtilisateurActionTypes, GetUtilisateursStateType } from "../action-types/UtilisateurTypes";

  
const initialStateGetAlbums: GetUtilisateursStateType = {
  utilisateurs: []
};

export const getUtilisateursReducer = (
  state = initialStateGetAlbums,
  action: UtilisateurActionTypes
): GetUtilisateursStateType => {
  switch (action.type) {
    case GET_UTILISATEURS:
      return {
        ...state,
        utilisateurs: action.payload
      };
    default:
      return state;
  }
};


