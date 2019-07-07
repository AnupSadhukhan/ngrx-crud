import { Injectable } from '@angular/core';
import {userModel } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : userModel[]=[];
  constructor(private httpClient:HttpClient) { }
  
  createUser(user : userModel){
      console.log("working in service ")
      return  this.httpClient.post<{name : string}>("https://ngrx-crud1.firebaseio.com/users.json",user
 
  );
  
  }
  getUsers(){
   return  this.httpClient.get<userModel[]>("https://ngrx-crud.firebaseio.com/users.json")
 
  }
  
  updateUser(id: string,user : userModel){
      return this.httpClient.put<userModel>(`https://ngrx-crud.firebaseio.com/users/${id}.json`,user);
  }
  deleteUser(id : string){
    return this.httpClient.delete(`https://ngrx-crud.firebaseio.com/users/${id}.json`);
    
  }

  getUser(){

  }
}
