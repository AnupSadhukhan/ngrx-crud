import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromUserActions from '../actions/user.actions'
import { Observable, of, pipe, from } from 'rxjs';
import { Action } from '@ngrx/store';
import {switchMap,map,mergeMap, catchError} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

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
                    //    mergeMap(
                        
                    //     (response) => {
                    //                   user.id=response.name;
                    //                   console.log("updating..."+user.id)
                    //                   console.log(user);
                    //                  return this.userService.updateUser(user.id,user).pipe(
                    //                     map(
                    //                         (response) => {console.log("updated");
                    //                         console.log(response)
                    //                     }
                    //                     ),
                    //                      catchError(() => of(new fromUserActions.UserAddFail()))
                    //                  )
                                   
                                   
                    //               }
                    //    ),
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
                                return of(new fromUserActions.UserAddFail())
                                
                                }
                            )
                        )
                            }  
                     ),
                     catchError(() => of(new fromUserActions.UserAddFail()))
                   );
                //    .pipe(
                //     map( 
                //       (response) => {
                //           user.id=response.name;
                //          this.userService.updateUser(user.id,user)
                       
                //       }
                
                //     ),
                //     catchError(() => of(new fromUserActions.UserAddFail()))
                           

                //   )
                   
                   
               }
            )
        )
    )
    // getUsers$ : Observable<Action> = this.actions$.pipe(
    //     ofType(fromUserActions)
    // )
    

}