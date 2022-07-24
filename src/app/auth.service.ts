import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://api-staging.art-station.org/arts/api/v1/cms/login'

  constructor(private http: HttpClient) {

  }
  login = new BehaviorSubject<boolean>(false); //Can Activate

  authLogin(user: any) {      //Api Function
  debugger   
    return this.http.post(this.baseUrl, user)

    }
  isLogin(data: any) {       //Can Activate
    this.login.next(data)
  }
  


}

