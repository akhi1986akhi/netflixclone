import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLoggedIn:boolean=false;
  constructor(private _router:Router){}
  ngOnInit(){
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  logout() {
    // Clear token from local storage
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    this._router.navigate(['/login']).then(()=>{
      window.location.reload();
    })
  }
}
