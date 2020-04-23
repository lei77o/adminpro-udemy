import { NgModule } from '@angular/core';

import { NonpagefoundComponent } from './nonpagefound/nonpagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    declarations: [
        NonpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NonpagefoundComponent
    ],
    exports: [
        NonpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NonpagefoundComponent
    ]
})
export class SharedModule { }