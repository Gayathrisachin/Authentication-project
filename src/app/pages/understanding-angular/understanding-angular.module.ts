import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderstandingAngularRoutingModule } from './understanding-angular-routing.module';
import { AboutComponentsComponent } from './about-components/about-components.component';
import { MaterialExampleModule } from 'src/app/material.module';
import { ViewChildComponent } from './view-child/view-child.component';
import { MatCardModule } from '@angular/material/card';
import { AlphabetsOnlyDirective, AppHighlightDirective, NumbersOnlyDirective, OnlyAlphabetsDirective } from 'src/app/Directives/app-highlight.directive';
import { DirectiveOverviewComponent } from './directive-overview/directive-overview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AboutComponentsComponent,
    ViewChildComponent,
    AppHighlightDirective,
    DirectiveOverviewComponent,NumbersOnlyDirective,
    OnlyAlphabetsDirective,
    AlphabetsOnlyDirective

  ],
  imports: [
    CommonModule,
    UnderstandingAngularRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],

})
export class UnderstandingAngularModule { }
