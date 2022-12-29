import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
// import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user: User;

    constructor(private accountService: AuthenticationService, private router : Router) {
      this.user = this.accountService.currentUserValue;
      console.log(this.user);
        
    }
  ngOnInit(): void {
    // this.user = this.accountService.currentUserValue;
    console.log(this.user);

  }
}