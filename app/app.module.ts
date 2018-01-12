import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { ProductListComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.component';
import { starComponent } from './shared/star.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductListComponent,
        ProductFilter,
        starComponent
    ],
    providers:[

    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}