import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import { NotFound } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductModule } from './products/product.module';


@NgModule({
    imports:[
        BrowserModule,
        ProductModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound},
        ])
    ],
    declarations:[
        AppComponent,
        NotFound,
        HomeComponent,
        OrderComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}