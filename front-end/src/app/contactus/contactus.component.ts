import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
conatctForm!:FormGroup;
constructor(private fb:FormBuilder){

}
ngOnInit(){
  this.form();
}
form() {
  this.conatctForm = this.fb.group({
    fname: ['',  Validators.required],
    Subject: ['', Validators.required],
    email:['', Validators.required],
    message:['', Validators.required]
  })
}
send(){
  if (this.conatctForm.valid) {
    Swal.fire({
      title: 'Success',
      text: 'We will get Back you Shortly!',
      icon: 'success',
      confirmButtonText: 'Exit'
    })
   
  } else {
    this.conatctForm.markAllAsTouched();
  }
 
}
}
