import {applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer';
import appReducer from './app-reducer';


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   form: formReducer,
   auth: authReducer,
   app: appReducer
});

let store = new createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
