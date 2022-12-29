import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertComponent } from '../components/alert/alert.component';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    @ViewChild('addEventDialog', { static: true }) addEventDialog!: TemplateRef<any>;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,private dialogs: MatDialog,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log("currentUser",currentUser);
        
        if (currentUser) {
            console.log();
            return true;
           
            // alert("user is not authorised")
           
        }
        else{
            
             // authorised so return true
             const dialogRef = this.dialogs.open(AlertComponent, {
                width: 'auto',
              });
          
              dialogRef.afterClosed().subscribe(result => {
                this.authenticationService.logout();
                this.router.navigate(['/login']);
              });
        }

        // not logged in so redirect to login page with the return url
        this.authenticationService.logout();
                this.router.navigate(['/login']);
        return false;
    }
}