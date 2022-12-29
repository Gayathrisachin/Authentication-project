import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {
message = new BehaviorSubject("initial")
output = this.message.asObservable()
  constructor() { }

  getMessage(msg : any){
  this.message.next(msg)
  }
}
