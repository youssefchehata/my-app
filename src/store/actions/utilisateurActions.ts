import {  GET_UTILISATEURS, UtilisateurActionTypes } from '../action-types/UtilisateurTypes';

import { Utilisateur } from '../interfaces/utilisateur';

export const getUtilisateurAction = (utilisateurs: Utilisateur[]): UtilisateurActionTypes => {
  return {
    type: GET_UTILISATEURS,
    payload: utilisateurs
  };
};