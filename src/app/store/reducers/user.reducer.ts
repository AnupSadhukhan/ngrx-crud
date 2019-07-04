import *  as userAction from '../actions/user.actions';
import { userModel } from 'src/app/model/user.model';

export interface UserState{
    users: userModel[];
    loading : boolean;
    loaded : boolean;
}
export const initialUserState:UserState={
    users : [],
    loading : false,
    loaded : false
}
export function userReducer(state = initialUserState, action : userAction.allUserActions) : UserState{

    switch(action.type){
        case userAction.UserActions.USER_ADD : {
            return {
                ...state,
                loading:true,
                loaded : false
            }
        }
        case userAction.UserActions.USER_ADD_FAIL : {
            return {...state}
        }
        case userAction.UserActions.USER_ADD_SUCCESS : {

            return {
                ...state,
                loading:false,
                loaded : true,
                users : [...state.users,action.payload]
            }
        }
       
    }
    return state;
}