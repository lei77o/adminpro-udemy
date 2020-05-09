import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NonpagefoundComponent } from './nonpagefound/nonpagefound.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ],
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