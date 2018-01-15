import {Component,OnInit} from '@angular/core';
import {IProduct} from './products'
import {ProductService} from './product.service'

@Component({
    selector:'edu-product',
    templateUrl:'app/products/prouctlist.component.html',
    //styles:['thead{color:red}]
    styleUrls:['app/products/productlist.component.css']
})

export class ProductListComponent implements OnInit{
    title:string="**Product List **";
    showImage:boolean=false;
    imageWidth:number=50;
    errorMessage:string
    filterProduct:string;
    products:IProduct[]

    constructor(private _productService:ProductService){}
    toggleImage(): void{
        this.showImage = !this.showImage
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                err=> this.errorMessage = <any> err)
    }

    onRatingClicked(message:string): void{
        this.title = "Product List"+ message 
    }

}

/*
one way
    --data {{}}
    --event ()
    --property []
Two way [()]
component
module
pipe
service
gaurds
*/