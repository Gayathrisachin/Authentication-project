import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { usersRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialExampleModule } from '../material.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [ListComponent,UsersComponent],
  imports: [
    CommonModule,
    usersRoutingModule,RouterModule,
    MaterialExampleModule
  ]
})
export class UsersModule { }
