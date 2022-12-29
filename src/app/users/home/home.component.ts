import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, first } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    user: User;

    constructor(private accountService: AuthenticationService, private router : Router) {
        this.user = this.accountService.currentUserValue;
    }
ngOnInit(): void {
    
}

onRefresh(){
  this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/users']);
}); 
}
}
