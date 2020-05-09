import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';

import { RxjsComponent } from './rxjs/rxjs.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {
        path: '' ,
        component: PagesComponent,
        children: [
            {path: 'account' , component: AccountSettingsComponent , data: {titulo: 'Ajustes del tem'}},
            {path: 'graficas1' , component: Graficas1Component , data: {titulo: 'Graficos'}},
            {path: 'dashboard' , component: DashboardComponent, data: {titulo: 'Dashboard'}},
            {path: 'promesas', component: PromesasComponent , data: {titulo: 'Promesas'}},
            {path: 'progress' , component: ProgressComponent , data: {titulo: 'Rxjs'}},
            {path: 'rxjs' , component: RxjsComponent , data: {titulo: 'Rxjs'}},
            {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
        ]    
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);