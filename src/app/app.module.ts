import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { FormsModule } from '@angular/forms';
import { PagesModule } from '../app/pages/pages.module';
import { ServiceModule } from './services/service.module';


//Rutas
import { APP_ROUTES } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer.component';

//servicios

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
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
