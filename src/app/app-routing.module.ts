import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './users/board-admin/board-admin.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersModule } from './users/users.module';

// import { HomeComponent } from './home';
// import { AuthGuard } from './_helpers';

const routes: Routes = [
 
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'users', loadChildren : () => import('./users/users.module').then(x => x.UsersModule),canActivate: [AuthGuard]},
    { path: 'overview', loadChildren : () => import('./pages/understanding-angular/understanding-angular.module').then(x => x.UnderstandingAngularModule),canActivate: [AuthGuard]},
    { path: 'rxjs', loadChildren : () => import('./pages/rxjs/rxjs.module').then(x => x.RxjsModule),canActivate: [AuthGuard]},
    { path: 'register', component: RegistrationComponent},

   

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes ) ],
    exports: [RouterModule]
  })
export class AppRoutingModule {}