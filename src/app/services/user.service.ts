import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    API_URL = environment.apiUrl
    public headers = new HttpHeaders().set('Content-Type', 'application/json')
    constructor(private http: HttpClient) { 
        this.getAll().subscribe(data => {
            console.log(data);
        });
    }

    getAll() {
        return this.http.get<any>(`./assets/db.json`);
    }
    // public suspensionTableData(): Observable<any> {
    //     let apiURL = 'url';
    //      //replace url with actual api endpoint and uncomment
    //     return this.http.get("./assets/fakeData.json");
    // }
    register(user: User) {
        return this.http.post(this.API_URL + `/register`, user,  { headers: this.headers });
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}