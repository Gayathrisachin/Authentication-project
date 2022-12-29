import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {

  content?: string;
 name = "Charlie"
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
    console.log("refresh admin");
    
    console.log(this.getName());
  }
  

getName() {
  let name='hh'
    console.log(name)
  if(!this.name){
     this.name = "James"
  }

  return this.name
}


}
