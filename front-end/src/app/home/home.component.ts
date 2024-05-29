import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = '';
  isLoggedIn :boolean=false;
  constructor(

    private _router:Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
console.log(this.isLoggedIn);
  }

  
  isValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = this.email;
    console.log(regex.test(email));
    return regex.test(email);

  }

  signup() {
    this.isValidEmail();
    console.log(this.email);

    if (this.isValidEmail()) {

      this._router.navigate(['/signup'],{queryParams:{email:this.email}})

    } else {

      Swal.fire({
        title: 'Warning!',
        text: 'Please fill your email-id',
        icon: 'warning',
        confirmButtonText: 'Cool'
      })
    }

  }

  watch(id:any){

    this._router.navigate(['watch'], {queryParams:{id:id}})
  }
}
