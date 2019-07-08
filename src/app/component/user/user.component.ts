import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUserActions from '../../store/actions/user.actions';
import {userModel} from '../../model/user.model';
import {UserService} from '../../services/user.service';
import { UserState } from 'src/app/store/reducers/user.reducer';
import * as fromAppState from '../../store/state/AppState';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showForm : boolean =false;
  users$ : Observable<userModel[]>;
  userAge : number;
  userName : String;
  userCompany : string;
  updateForm : boolean =false;
  updatedIndex : number =-1;
  errorMsg$ : Observable<string>;
  constructor(private userService : UserService,
    private store: Store<UserState>) { 
     
    }

  ngOnInit() {
    this.showForm=false;
    //this.users = this.userService.getUsers();
     this.store.dispatch(new fromUserActions.GetUsers())
    this.users$ = this.store.select(fromAppState.getUsers);
    this.errorMsg$ = this.store.select(fromAppState.getErrorMsg);
     

  }
  onCreateUser(){
      this.showForm=true;
     this.clearData();
  }
  onClose(){
    this.showForm=false;
    this.clearData();
  }
  clearData(){
  this.userAge=null;
    this.userCompany='';
    this.userName='';
    this.updatedIndex=-1;
     this.updateForm=false;
  }
  
  onSubmit(formRef : HTMLFormElement){
    this.showForm=false;
    const user : userModel = formRef.value;
    console.log(user)
   
    if(!this.updateForm){
     
      this.store.dispatch(new fromUserActions.UserAdd(user));
     //this.users= this.userService.createUser(user);
    }
    else{
       if(this.updatedIndex!=-1){
          
        //this.users=this.userService.updateUser(this.updatedIndex,user);
         this.updatedIndex=-1;
       
       }
    }
    this.clearData()
   // this.users = this.userService.getUsers();
   console.log(this.updateForm)
  }
  onUpdate(i: number){
    this.showForm =true;
    this.updateForm =true;
    this.updatedIndex=i;
    const user: userModel =this.users$[i];
   this.userName = user.fullName;
   this.userAge = user.age;
   this.userCompany = user.company;
   
    console.log(user);
    console.log("going to update"+ i)
    console.log(this.updateForm)
  }
  onDelete(i : string){
    console.log("will delete.. "+i)
    
     this.store.dispatch(new fromUserActions.DeleteUser(i))

    this.clearData();
     this.loadUsers();
    
  }
  loadUsers(){
   // this.users=this.userService.getUsers();
    this.showForm =false;
  }

  //Gererating unique number method

  // getUniqueNumber(){
  //   let c=1;
  //   return () =>{
  //     return c++;
  //   }
  // }
  
}
