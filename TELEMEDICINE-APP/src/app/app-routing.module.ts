import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate:[AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginModule', canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'auth/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
