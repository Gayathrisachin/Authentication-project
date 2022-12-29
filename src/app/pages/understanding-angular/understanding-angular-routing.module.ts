import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentsComponent } from './about-components/about-components.component';
import { DirectiveOverviewComponent } from './directive-overview/directive-overview.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path:'',redirectTo:'aboutComp',pathMatch:'full'
  },
  {
    path:'aboutComp',component:AboutComponentsComponent
  },
  {
    path:'view-child',component:ViewChildComponent
  },
  {
    path:'directives',component:DirectiveOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderstandingAngularRoutingModule { }
