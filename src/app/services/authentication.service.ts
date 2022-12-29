import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    API_URL = environment.apiUrl
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient) {
        let obj: any = localStorage.getItem('currentUser')
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(obj));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    

    login(username: string, password: string, email? : string) {
        return this.http.post<any>(this.API_URL +`/authenticate`, { username, password, email })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}