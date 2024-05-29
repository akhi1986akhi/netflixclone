import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup;
  constructor(private _actRoute: ActivatedRoute, private fb: FormBuilder, private _router: Router, private loginService: LoginService) { }


  ngOnInit(){
    this.loginForm()
  }
  loginForm() {
    this.loginform = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    })

  }
  login() {
    console.log("login forms",this.loginform.value)
    this.loginService.login(this.loginform.value).subscribe({
      next: (resp: any) => {
        console.log(resp)
if(resp.status =='success'){

  localStorage.setItem("firstName", resp.result.fname);
  localStorage.setItem("lastName", resp.result.lname);
  localStorage.setItem("email", resp.result.email);
  localStorage.setItem("token", resp.token)
  Swal.fire({
    title: 'Success',
    text: 'login Successful!',
    icon: 'success',
    confirmButtonText: 'ok'
  }).then(()=>{
    this._router.navigate(['/']).then(()=>{

      window.location.reload();
    })
  })
}
      }, error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'User not Found!',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    })
  }

}
