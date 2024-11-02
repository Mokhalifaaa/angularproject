import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) {}
 adduser(user:any){
 return this.httpclient.post(`http://localhost:8000/user`,user)

 }
 

}
