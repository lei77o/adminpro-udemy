import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { PagesModule } from '../app/pages/pages.module';


//Rutas
import { APP_ROUTES } from './app.routes';

//Componentes
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegistrerComponent } from './login/registrer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
