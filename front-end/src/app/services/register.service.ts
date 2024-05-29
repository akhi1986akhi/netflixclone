import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
url ='http://localhost:3000/v2/api/users'
  constructor(private http:HttpClient) { }
  register(data :any){
    return this.http.post(this.url +'/register',data);
  }
}
