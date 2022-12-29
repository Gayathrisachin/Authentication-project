import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit,AfterViewInit  {
  @ViewChild('heading',{static:true})output!: ElementRef
  @ViewChildren('fc') content! : QueryList<ElementRef>
  constructor() { }

  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
  //   let colors = ['red', 'green','orange']
  //  let color = colors[Math.floor(Math.random() * colors.length)];
console.log(this.content);

setInterval(() =>{
  this.output.nativeElement.style.color = 'blue';

},3000)
      setInterval(() =>{
       this.content.first.nativeElement.style.color = 'red';

    },5000)

    setInterval(() =>{
      this.content.last.nativeElement.style.color = 'green';

   },6000)
  }
  
}


