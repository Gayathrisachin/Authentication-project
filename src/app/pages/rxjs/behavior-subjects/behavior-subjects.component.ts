import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../rxjs-service.service';

@Component({
  selector: 'app-behavior-subjects',
  templateUrl: './behavior-subjects.component.html',
  styleUrls: ['./behavior-subjects.component.scss']
})
export class BehaviorSubjectsComponent implements OnInit {
  messageFromSub:any
  constructor(private service:RxjsServiceService) {
    console.log("behavior subject");
    
   }

  ngOnInit(): void {
    console.log("behavior subject");
   
  
  }
  getMes(){
    this.service.output.subscribe(res =>
      this.messageFromSub = res
     )
  }

}
