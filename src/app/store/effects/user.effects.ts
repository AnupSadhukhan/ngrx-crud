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
                     catchError((error) => of(new fromUserActions.UserAddFail("creation failed "+error.error.error)))

                     
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
                        (error) => {
                            alert(error.error.error)
                           return of(new fromUserActions.GetUsersFail(`Error occured at getusers ${error.error.error}`))
                        }
                    )
                )
              }
           )
        )
    )
    @Effect()
    deleteUser$ : Observable<Action> = this.actions$.pipe(
        ofType<fromUserActions.DeleteUser>(fromUserActions.UserActions.DELETE_USER),
        pipe(
            
           switchMap(
            (action) => {
                return this.userService.deleteUser(action.payload).pipe(
                    switchMap(
                        ( ) => {
                            return this.userService.getUsers().pipe(
                              map(
                                  (users : userModel[]) => {
                                    return new fromUserActions.GetUsersSuccess(users)
                                  }
                              ),
                              catchError(
                                  (error) => {
                                      alert(error.error.error)
                                     return of(new fromUserActions.GetUsersFail("failed to fetch users"))
                                  }
                             )
                         
                            )
                            
                        }
                    ),
                    catchError(
                        (error) => {
                            alert(error.error.error)
                           return of(new fromUserActions.DeleteUserFail(`Error occured at Delete user ${error.error.error}`))
                        }
                    )
                )
              }
           )
        )
    );
    @Effect()
    updateUser$ : Observable<Action> = this.actions$.pipe(
        ofType<fromUserActions.UpdateUser>(fromUserActions.UserActions.UPDATE_USER),
        pipe(
            switchMap(
                (action ) => {
                    return this.userService.updateUser(action.payload.id,action.payload)
                    .pipe(
                        map(
                            (user : userModel) => new fromUserActions.UpdateUserSuccess(user)
                        ),
                        catchError(
                            (error) => {
                                alert(error.error.error)
                               return of(new fromUserActions.UpdateUserFail(error.error.error))
                            }
                        )
                    )
                }
            ),
            catchError(
                 (error) => {
                     alert(error.error.error)
                    return of(new fromUserActions.UpdateUserFail(error.error.error))
                 }
            )
        )
    )
    

}