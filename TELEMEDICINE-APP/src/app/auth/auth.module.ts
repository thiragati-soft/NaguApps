import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './lazyloader.routers';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
    declarations: [AuthComponent],
    imports: [ 
        LoginModule,
        DashboardModule,
        CommonModule,
        RouterModule.forChild(appRoutes),
        SidebarModule.forRoot(),
     ],
    exports: [],
    providers: [],
})
export class AuthModule {}