import {Component,OnInit} from '@angular/core';
import {IProduct} from './products'

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
    filterProduct:string;
    products:IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]

    toggleImage(): void{
        this.showImage = !this.showImage
    }

    ngOnInit(): void{
        console.log("hiiii this is On Init")
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