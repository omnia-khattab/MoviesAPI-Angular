import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import {UserData} from './UserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData=new BehaviorSubject(null);

  constructor(public _HttpClient:HttpClient ) { }

  signUp(data):Observable<any>{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`,data);
  }

  login(data):Observable<any>{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`,data);
  }

  saveUserData(user,token){
    let UserD=new UserData(user.first_name,user.last_name,user.email,token);
    this.userData.next(UserD);
  }
}
