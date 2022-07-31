import * as A from '../action-types/index';

export const utilisateursListReducer = (state = { utilisateurs: [] }, action:any) => {
  const { type, payload } = action;
  switch (type) {
    case A.ActionType.USERS_LIST_REQUEST:
      return { loading: true, utilisateurs: [] };

    case A.ActionType.USERS_LIST_SUCCESS:
      return { 
        loading: false, 
        utilisateurs: payload.utilisateurs ,
    
      };

    case A.ActionType.USERS_LIST_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};