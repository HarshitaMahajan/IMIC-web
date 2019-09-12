import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOption={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  todosUrl:string = 'http://localhost:4000/addname';
  todosLimit = '?_limit=5';

  

  constructor(private http:HttpClient) { }
  // Get Todos
  getTodos():Observable<User[]> {
    return this.http.get<User[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
