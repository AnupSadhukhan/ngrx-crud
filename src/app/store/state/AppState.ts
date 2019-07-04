import * as fromUserReducer from '../reducers/user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppStateInterface{
    userState : fromUserReducer.UserState;
}
export const AppState:AppStateInterface={
    userState : fromUserReducer.initialUserState
}
export const AppReducers: ActionReducerMap<AppStateInterface>={
    userState : fromUserReducer.userReducer
}