import {Action} from '@ngrx/store';
import { userModel } from 'src/app/model/user.model';



export const enum UserActions{
    USER_ADD='[USER] USER ADD',
    USER_ADD_SUCCESS='[USER] USER ADD SUCCESS',
    USER_ADD_FAIL='[USER] USER ADD FAIL',

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
    
}

export type allUserActions= UserAdd | UserAddSuccess | UserAddFail;
