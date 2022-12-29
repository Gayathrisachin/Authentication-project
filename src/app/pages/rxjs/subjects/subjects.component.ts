import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxjsServiceService } from '../rxjs-service.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
message:any
sub:FormGroup
  constructor(private apservice:RxjsServiceService,private fb : FormBuilder) { 
    this.sub = this.fb.group({
      mes:['']
    })
  }

  ngOnInit(): void {
    console.log("subject log");
    
    // this.apservice.output.subscribe(res=>
      
    //   this.message = res
    // )  
  }
 
  editMessage(data : any){
    console.log("hi");
    this.apservice.output.subscribe(res=>
      
      this.message = res
    ) 
    this.apservice.getMessage(data)
  }
}
