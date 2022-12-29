import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  objArray: any[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      // private alertService: AlertService
  ) { 
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: [''],
        role: [''],
        password: ['', [Validators.required,]]
    });
  }

  ngOnInit() {
      
  }

  // convenience getter for easy access to form fields
  // get registerForm() { return this.registerForm.controls; }

  onSubmit() {
    if(this.registerForm.invalid){
      for (const control of Object.keys(this.registerForm.controls)) {
        this.registerForm.controls[control].markAsTouched();
      }
      return
    }
    else{
      const payload =
      { 
        username:this.registerForm.value.username, 
        password:this.registerForm.value.password,
        email:this.registerForm.value.email,
        role: this.registerForm.value.role} 
  console.log(this.registerForm.value);
  
  this.userService.register(this.registerForm.value)
  
  .subscribe(
      data => {
          alert('Registration successful');
          // this.objArray.push(payload)
          // localStorage.setItem("currentUser",JSON.stringify(this.objArray));
          this.router.navigate(['/login']);
      },
      error => {
          alert(error);
          this.loading = false;
      }
      );
   
  }
}
}
