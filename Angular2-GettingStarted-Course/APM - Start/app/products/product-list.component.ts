import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    private _productService: ProductService;
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string = '';
    products: IProduct[];
    private errorMessage: string;

    constructor(productService: ProductService) {
        this._productService = productService;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._productService.getProducts()
            .subscribe( products => this.products = products,
                        error => this.errorMessage = <any>error
        );

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
