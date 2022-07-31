import { combineReducers } from "redux";
import { getAlbumsReducer } from './albumReducer';
import { getUtilisateursReducer } from './utilisateurReducer.';
import { getImagesReducer } from './imageReducer';



const rootReducer = combineReducers({
    utilisateurs : getUtilisateursReducer,
    albums:getAlbumsReducer,
    images:getImagesReducer
})
export default rootReducer
export type RootStore = ReturnType<typeof rootReducer>