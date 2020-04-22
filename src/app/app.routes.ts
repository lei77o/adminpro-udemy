import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NonpagefoundComponent } from './shared/nonpagefound/nonpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer.component';

const appRoutes: Routes = [

    {
        path: '' ,
        component: PagesComponent,
        children: [
            {path: 'graficas1' , component: Graficas1Component},
            {path: 'dashboard' , component: DashboardComponent},
            {path: 'progress' , component: ProgressComponent},
            {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
        ]    
    },

    {path: 'login' , component: LoginComponent},
    //{path: 'register' , component: RegisterComponent},
    {path: 'register' , component:  RegistrerComponent},
    {path: '**' , component: NonpagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash : true} );

