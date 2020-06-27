import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
]

@NgModule({
    declarations: [DashboardComponent],
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class DashboardModule {}