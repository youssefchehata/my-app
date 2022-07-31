import { createStore, applyMiddleware } from 'redux';
import { configureStore, } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const reducer = rootReducer;



const initialState = {

};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);




export type AppState = ReturnType<typeof rootReducer>;
export default store;


