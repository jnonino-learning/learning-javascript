import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by jnonino on 27/01/2017.
 */

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product ID');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
