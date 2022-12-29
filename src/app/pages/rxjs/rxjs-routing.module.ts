import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectsComponent } from './behavior-subjects/behavior-subjects.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path:'',redirectTo:'subjects',pathMatch:'full'},
  {path:'subjects',component:SubjectsComponent},
  {path:'behavior-subject',component:BehaviorSubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
