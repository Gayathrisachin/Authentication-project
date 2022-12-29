import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { ACLSidebarMenu } from '../utils/sidebar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sidebar: any=[];
  // currentUser: any;
  userName: any;
  isLoggedIn$: Observable<boolean>;
  currentUser: User[] = [];
  // userName: any;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
   constructor( public router: Router,
    private authenticationService: AuthenticationService) { 
      console.log(router.url);
      
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
      console.log(this.currentUser);
      this.userName = x?.username
      
    }
   
      );
      this.sidebar = ACLSidebarMenu
      console.log(this.sidebar);
      this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }
  ngOnInit(): void {
  
  }

  // logout(): void {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }
}
