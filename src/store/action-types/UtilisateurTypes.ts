
import { Utilisateur } from '../interfaces/utilisateur';

export const GET_UTILISATEURS = 'GET_UTILISATEURS';

export interface GetUtilisateursStateType {
  utilisateurs: Utilisateur[];
}

interface GetUtilisateursActionType {
  type: typeof GET_UTILISATEURS;
  payload: Utilisateur[];
}
export type UtilisateurActionTypes = GetUtilisateursActionType;