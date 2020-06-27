import { RouterModule, Routes, CanActivate, CanDeactivate } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate:[AuthGuard] },
    ]
}];
