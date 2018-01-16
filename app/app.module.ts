import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { ProductListComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.component';
import { starComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFound } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductGaurds } from './products/product-gaurd.service';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products',component:ProductListComponent},
            {path:'products/:id',
            canActivate:[ProductGaurds],component:ProductDetailComponent},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound},
        ])
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductListComponent,
        ProductFilter,
        starComponent,
        ProductDetailComponent,
        NotFound,
        HomeComponent,
        OrderComponent
        
    ],
    providers:[
        ProductService,ProductGaurds
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}