import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from '../helpers/auth.guard';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
//   { path: '', component: UsersComponent,
// children:[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent },
// ] 
// },
 
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class usersRoutingModule {}