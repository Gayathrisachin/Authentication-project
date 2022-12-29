import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    MaterialExampleModule
    
  ],
  exports: [AlertComponent]
})
export class AlertMessageModule { }
