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
    // this.users.push(user);
    // console.log(user)
    
      console.log("working in service ")
  return  this.httpClient.post<{name : string}>("https://ngrx-crud1.firebaseio.com/users.json",user
  //   ,
  //   {  observe : "response",
  //     responseType : "json"
  // }
  );
  // .pipe(
  //   map( 
  //     (response) => {
  //       console.log("working in service map")
  //       console.log(response.name);
  //       user.id=response.name;
  //       console.log(user);
  //       console.log(user.id);
  //       const url="https://ngrx-crud.firebaseio.com/users/"+user.id+".json";
  //       this.httpClient.put(url,user).subscribe((response) => {console.log(response)});
  //       console.log("overwrite done!!!")
  //     }

  //   )
  // )

  // .subscribe(
  //     (response ) => {
  //       user.id=response.name;
  //       this.users.push(user);
  //       console.log(user)
  //       console.log(this.users)
  //       console.log(response)
  //       const url="https://ngrx-crud.firebaseio.com/users/"+user.id+".json";
  //       return this.httpClient.put(url,user);
  //     }

  //   ); 
  //   this.httpClient.get<userModel[]>("https://ngrx-crud.firebaseio.com/users.json"
  // //   ,
  // //   {  observe : "response",
  // //     responseType : "json"
  // // }
  // ).subscribe(
  //     (response) => {console.log(response)}
  //   ); 
  //   console.log(this.users)
    //return this.users.slice();
    //return this.httpClient.post<{name : string }>("https://ngrx-crud.firebaseio.com/users.json",user);
  }
  getUsers(){
   return  this.httpClient.get<userModel[]>("https://ngrx-crud.firebaseio.com/users.json"
    //   ,
    //   {  observe : "response",
    //     responseType : "json"
    // }
    )
  // return this.users.slice();
  }
  // updateUser(index : number,user: userModel){
  //   this.users[index]=user;
  //   console.log(user);
  //    return this.users.slice();
  // }
  updateUser(id: string,user : userModel){
      return this.httpClient.put<userModel>(`https://ngrx-crud.firebaseio.com/users/${id}.json`,user);
  }
  deleteUser(id : string){
    //this.users.splice(index,1);
    return this.httpClient.delete(`https://ngrx-crud.firebaseio.com/users/${id}.json`);
    
  }

  getUser(){

  }
}
