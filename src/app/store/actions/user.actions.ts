import {Action} from '@ngrx/store';
import { userModel } from 'src/app/model/user.model';



export const enum UserActions{
    USER_ADD='[USER] USER ADD',
    USER_ADD_SUCCESS='[USER] USER ADD SUCCESS',
    USER_ADD_FAIL='[USER] USER ADD FAIL',
    GET_USERS='[USER] GET USERS',
    GET_USERS_FAIL='[USER] GET USERS FAIL',
    GET_USERS_SUCCESS='[USER] GET USERS SUCCESS'

}
//export const USER_ADD='[USER] USER ADD';


export class UserAdd implements Action{
    readonly type=UserActions.USER_ADD;
    constructor(public payload: userModel){}
}
export class UserAddSuccess implements Action{
    readonly type=UserActions.USER_ADD_SUCCESS;
    constructor(public payload: userModel){}
}
export class UserAddFail implements Action{
    readonly type = UserActions.USER_ADD_FAIL;
    constructor(public payload: string){}
}
export class GetUsers implements Action{
    readonly type= UserActions.GET_USERS;

}
export class GetUsersFail implements Action{
    readonly type= UserActions.GET_USERS_FAIL;
    constructor(public payload: string){}
    
}
export class GetUsersSuccess implements Action{
    readonly type= UserActions.GET_USERS_SUCCESS;
    constructor(public payload : userModel[]){}
    
}

export type allUserActions= UserAdd | UserAddSuccess | UserAddFail

                            | GetUsers | GetUsersFail | GetUsersSuccess;
