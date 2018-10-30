import {IProduct} from "./product";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/**
 * Created by jnonino on 26/01/2017.
 */

@Injectable()
export class ProductService {
    private _productUrl: string = 'api/products/products.json';

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl).map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error');
    }

    getProduct(id: number) {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
}
