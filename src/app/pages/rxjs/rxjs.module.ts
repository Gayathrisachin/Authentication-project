import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviorSubjectsComponent } from './behavior-subjects/behavior-subjects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/material.module';
import { RxjsServiceService } from './rxjs-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SubjectsComponent,
    BehaviorSubjectsComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
  RxjsServiceService
  ]
})
export class RxjsModule { }
