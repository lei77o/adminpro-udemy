import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer.component';
import { NonpagefoundComponent } from './shared/nonpagefound/nonpagefound.component';

const appRoutes: Routes = [

    {path: 'login' , component: LoginComponent},
    //{path: 'register' , component: RegisterComponent},
    {path: 'register' , component:  RegistrerComponent},
    {path: '**' , component: NonpagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash : true} );

