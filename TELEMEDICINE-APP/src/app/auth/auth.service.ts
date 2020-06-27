import { Injectable } from '@angular/core';
//import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken()
   {
    return sessionStorage.getItem("token")
  }

  isLoggedIn()
  {
    return this.getToken() !== null;
  }

  // loginUser(userid, password)
  // {
  //   let params=new HttpParams();
  //   params=params.append('userid',userid);
  //   params=params.append('password',password);
  //   params = params.append('Ip_Address', sessionStorage.getItem('Ip_Address'));
    
  //   return this._http.get('http://192.168.0.66/mtms/api/Home/CheckLogin',{params});
  // }
}
