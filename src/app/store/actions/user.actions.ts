import {Action} from '@ngrx/store';
import { userModel } from 'src/app/model/user.model';
import { useAnimation } from '@angular/animations';



export const enum UserActions{
    USER_ADD='[USER] USER ADD',
    USER_ADD_SUCCESS='[USER] USER ADD SUCCESS',
    USER_ADD_FAIL='[USER] USER ADD FAIL',
    GET_USERS='[USER] GET USERS',
    GET_USERS_FAIL='[USER] GET USERS FAIL',
    GET_USERS_SUCCESS='[USER] GET USERS SUCCESS',
    DELETE_USER = '[USER] DELETE_USER',
    DELETE_USER_FAIL = '[USER] DELETE_USER_FAIL',
    DELETE_USER_SUCCESS = '[USER] DELETE_USER_SUCCESS',
    UPDATE_USER = '[USER] UPDATE_USER',
    UPDATE_USER_SUCCESS = '[USER] UPDATE_USER_SUCCESS',
    UPDATE_USER_FAIL = '[USER] UPDATE_USER_FAIL'

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
export class DeleteUser implements Action{
    readonly type = UserActions.DELETE_USER;
    constructor(public payload : string){

    }

}
export class DeleteUserFail implements Action{
    readonly type=UserActions.DELETE_USER_FAIL;
    constructor(public payload){

    }
}
export class DeleteUserSuccess implements Action{
    readonly type=UserActions.DELETE_USER_SUCCESS;

}
export class UpdateUser implements Action{
    readonly type=UserActions.UPDATE_USER;
    constructor(public payload:userModel){}
}

export class UpdateUserSuccess implements Action{
    readonly type=UserActions.UPDATE_USER_SUCCESS;
    constructor(public payload: userModel){}

}

export class UpdateUserFail implements Action{
    readonly type = UserActions.UPDATE_USER_FAIL;
    constructor(public payload: string){}
}

export type allUserActions= UserAdd | UserAddSuccess | UserAddFail

                            | GetUsers | GetUsersFail | GetUsersSuccess
                            | DeleteUser | DeleteUserFail | DeleteUserSuccess
                            | UpdateUser | UpdateUserFail | UpdateUserSuccess ;
