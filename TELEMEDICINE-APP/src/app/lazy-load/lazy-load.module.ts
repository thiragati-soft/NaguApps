import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [   
  {path: 'auth', loadChildren: '../auth/auth.module#AuthModule', canActivate:[AuthGuard]},
  {path: 'login', loadChildren: '../login/login.module#LoginModule'},

  {path: '**', redirectTo: 'auth/dashboard'},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class LazyLoadModule { }
