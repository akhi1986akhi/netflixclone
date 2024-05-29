import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signFrom!: FormGroup;
  email: any

  constructor(
    private _actRoute: ActivatedRoute, private fb: FormBuilder, private _router: Router, private _register: RegisterService
  ) {

  }

  ngOnInit(): void {
    this.email = this._actRoute.snapshot.queryParamMap.get('email');

    // this.emailFormControl = new FormControl(email);

    console.log(this.email);
    this.form()
  }


  form() {
    this.signFrom = this.fb.group({
      role:['user'],
      fname: ['',  Validators.required],
      lname: ['', Validators.required],
      conatct: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: [this.email],
      password: ['',Validators.required],
      confirmPass: ['', Validators.required]

    })
  }

  checkInput(event: any) {
    console.log("checked", event.target.checked)
  }

  submit() {
    if (this.signFrom.value.password == this.signFrom.value.confirmPass) {
      this._register.register(this.signFrom.value).subscribe({
        next: (resp:any) => {
          console.log(resp)
          if(resp.status=='success'){
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Signed Up successfully"
            });
            this.signFrom.reset();
          }else if(resp.status=='duplicate'){
            Swal.fire({
              title: 'Warning',
              text: 'User Already Registred!',
              icon: 'warning',
              confirmButtonText: 'ok'
            })
          }
        }, error: (err) => {
          console.log(err);

        }
      })
      
      // console.log("forms value", this.signFrom.value)
    } else {
      window.alert('Password not match')
    }
  }

}
