import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromUserActions from '../actions/user.actions'
import { Observable, of, pipe, from } from 'rxjs';
import { Action } from '@ngrx/store';
import {switchMap,map,mergeMap, catchError} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { userModel } from 'src/app/model/user.model';

@Injectable({
    providedIn : "root"
})
export class UserEffects{

    constructor(private actions$: Actions,private userService : UserService){}

    @Effect()
    creatingUser$: Observable<Action> =this.actions$.pipe(
        ofType<fromUserActions.UserAdd>(fromUserActions.UserActions.USER_ADD),
        pipe(
            map(action => action.payload)
            ,
            switchMap(
               (user) => {
                   console.log("working in effects!!")
                   return this.userService.createUser(user)
                   .pipe(
                    
                    switchMap(
                        (response) => { 
                            user.id=response.name;
                            return this.userService.updateUser(user.id,user).pipe(
                            map(
                                
                                (user) => {
                                    console.log("will be returning now")
                                   return new fromUserActions.UserAddSuccess(user)
                                    
                                }
                            ),
                            catchError( () => {
                                this.userService.deleteUser(user.id).subscribe();
                                return of(new fromUserActions.UserAddFail("updation of id failed"))
                                
                                }
                            )
                        )
                            }  
                     ),
                     catchError(() => of(new fromUserActions.UserAddFail("creation failed")))
                   );
                
                   
                   
               }
            )
        )
    )

    @Effect()
    getUsers$ : Observable<Action> = this.actions$.pipe(
        ofType<fromUserActions.GetUsers>(fromUserActions.UserActions.GET_USERS),
        pipe(
           switchMap(
            () => {
                return this.userService.getUsers().pipe(
                    map(
                        (users : userModel[] ) => {
                            return new fromUserActions.GetUsersSuccess(users)
                        }
                    ),
                    catchError(
                        (error) => of(new fromUserActions.GetUsersFail(`Error occured at getusers ${error}`))
                    )
                )
              }
           )
        )
    )
    

}