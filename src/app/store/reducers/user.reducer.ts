import *  as userAction from '../actions/user.actions';
import { userModel } from 'src/app/model/user.model';

export interface UserState{
    users: userModel[];
    loading : boolean;
    loaded : boolean;
    errorMsg?: string;
}
export const initialUserState:UserState={
    users : [],
    loading : false,
    loaded : false,
    errorMsg : ''
}
export function userReducer(state = initialUserState, action : userAction.allUserActions) : UserState{

    switch(action.type){
        case userAction.UserActions.USER_ADD : {
            return {
                ...state,
                loading:true,
                loaded : false,
                errorMsg : ''
            }
        }
        case userAction.UserActions.USER_ADD_FAIL : {
            return {
                ...state,
                loading : false,
                loaded : false,
                errorMsg : action.payload
                }
        }
        case userAction.UserActions.USER_ADD_SUCCESS : {
            //const data= Object.values(action.payload);
            return {
                ...state,
                loading:false,
                errorMsg : '',
                loaded : true,
                users : [...state.users,action.payload]
            }
        }
        case userAction.UserActions.GET_USERS : {

            
                return {
                    ...state,
                    loading:true,
                    loaded : false,
                    errorMsg : ''
                }
            
        }
        case userAction.UserActions.GET_USERS_FAIL : {

            
            return {
                ...state,
                loading: false,
                loaded : false,
                errorMsg : action.payload
            }
        
    }
    case userAction.UserActions.GET_USERS_SUCCESS : {

        const data= Object.values(action.payload);
        
        return {
            ...state,
            loading: false,
            loaded : true,
            errorMsg : '',
            users : [...state.users,...data]
        }
    
}
       
    }
    return state;
}


export const getUsers = (userState : UserState) => userState.users;
export const getLoading =  (userState : UserState) => userState.loading;
export const getLoaded =  (userState : UserState) => userState.loaded;
export const getErrorMsg =  (userState : UserState) => userState.errorMsg;