import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    title:string
    name:string;
    imgUrl:string;
    desc:string;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.title += `:  ${id}`

        this._route
            .queryParams
            .subscribe(parmas =>{
                this.title=parmas['name']
                this.name = parmas['name'];
                this.imgUrl = parmas['img'];
                this.desc = parmas['desc']
            })
    }

    
    onBack():void{
        this._router.navigate(['/products'])
    }    

   
}