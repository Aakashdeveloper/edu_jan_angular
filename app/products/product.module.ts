import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router';

import { ProductListComponent } from './product.component';
import { ProductFilter } from './product-filter.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductGaurds } from './product-gaurd.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'products/:id',
            canActivate:[ProductGaurds],component:ProductDetailComponent}
        ])
    ],
    declarations:[
        ProductListComponent,
        ProductFilter,
        ProductDetailComponent
    ],
    providers:[
        ProductService,
        ProductGaurds
    ]
})

export class ProductModule{

}