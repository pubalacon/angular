import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService : AuthService,
        private router: Router
    ){ }

canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : boolean {
        let url: string = state.url;
        if (this.authService.isLoggedIn)
            return true;

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}