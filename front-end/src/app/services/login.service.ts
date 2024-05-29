import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
url="http://localhost:3000/v2/api/users";
  constructor(private http:HttpClient) { }
  login(data :any): Observable<any>{
    return this.http.post<any>(this.url +'/login',data);
  }
}
