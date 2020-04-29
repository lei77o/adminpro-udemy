import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component'


//ng2-charts
import { ChartsModule } from 'ng2-charts';

//Rutas Paginas
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        BrowserModule
        
    ]
})
export class PagesModule { }
