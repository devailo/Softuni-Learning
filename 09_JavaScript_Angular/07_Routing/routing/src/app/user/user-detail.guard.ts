import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    canActivate(

        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.checkIfLogged(state.url)
    }

    checkIfLogged(url: string): boolean {
        return false
    }
}