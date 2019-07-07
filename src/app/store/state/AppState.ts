import * as fromUserReducer from '../reducers/user.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export interface AppStateInterface{
    userState : fromUserReducer.UserState;
}
// export const AppState:AppStateInterface={
//     userState : fromUserReducer.initialUserState
// }
export const AppReducers: ActionReducerMap<AppStateInterface>={
    userState : fromUserReducer.userReducer
}

export const getAppState= createFeatureSelector('app');

export const getUserState= createSelector(
    getAppState,
    (appState : AppStateInterface) => appState.userState
)
export const getUsers = createSelector(
    getUserState,
    fromUserReducer.getUsers
)

export const getLoading = createSelector(
    getUserState,
    fromUserReducer.getLoading
)

export const getLoaded= createSelector(
    getUserState,
    fromUserReducer.getLoaded
    )


export const getErrorMsg = createSelector(
        getUserState,
        fromUserReducer.getErrorMsg
)