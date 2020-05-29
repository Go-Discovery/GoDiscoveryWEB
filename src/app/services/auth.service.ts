import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerurl = 'http://localhost:8080/api/users/register';
  private loginurl = 'http://localhost:8080/api/users/login';
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.registerurl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this.loginurl, user);
  }

  loggedIn(){
    return !!sessionStorage.getItem("token");
  }

  getToken(){
    return sessionStorage.getItem("token");
  }

  loggedOut(){
    sessionStorage.clear();
  }
}
