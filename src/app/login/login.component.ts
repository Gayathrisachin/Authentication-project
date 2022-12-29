import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  registeredUsers: any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
  ) {
    console.log(!this.authenticationService.currentUserValue);
      // redirect to home if already logged in
      // console.log(this.authenticationService.currentUserValue);
      if (this.authenticationService.currentUserValue) { 
        console.log(this.authenticationService.currentUserValue);
        
          this.router.navigate(['/login']);
      }
      else{
        console.log("hi");
        
      }
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  ngOnInit() {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    //   console.log(this.roles);
      
    // }

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log(this.returnUrl);
      this.userService.getAll().subscribe((res : any) => {
console.log(res);
this.registeredUsers = res.register
console.log(this.registeredUsers);


      })

    }

  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

//   onSubmit() {
//       this.submitted = true;

//       // stop here if form is invalid
//       if (this.loginForm.invalid) {
//           return;
//       }
//       const user = this.registeredUsers.find((item : any) => {
//         return item.username === this.loginForm.value.username && item.password === this.loginForm.value.password
//       });
//       if(user){
//         alert("logged in succefully")
//         this.router.navigate([this.returnUrl]);
//       }
//       else{
//  alert("Username and password incorrect")
//       }

//       // this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
//       //       .pipe(first())
//       //       .subscribe(
//       //           data => {
//       //               this.router.navigate([this.returnUrl]);
//       //               console.log(this.returnUrl);
//       //           },
//       //           error => {
//       //               alert("error");
//       //               this.loading = false;
//       //           });
         
//   }


onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  // this.alertService.clear();

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  // this.loading = true;
  this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from query parameters or default to home page
              alert("success")
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
              console.log(returnUrl);
              
              this.router.navigateByUrl(returnUrl);
          },
          error: error => {
              alert(error);
              // this.loading = false;
          }
      });
}
  reloadPage(): void {
    window.location.reload();
  }
}
