import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl : string; // pour capter l'url demandée par un utilisateur non loggé et le rediriger apres login OK

    // methode de connexion
    login(name: string, password: string) : Observable<boolean>
    {
        let isLoggedIn = (name === 'admin' && password === 'admin'); // attention le scope de ce isLoggedIn est local a la methode login() et donc different de celui this.isLoggedIn ci-dessus

        // appel au service d'authentification
        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn) // tap permet d'executer qqchose pendant le return
        );
    }

    // methode de deconnexion
    logout() : void {
        this.isLoggedIn = false;
    }
}