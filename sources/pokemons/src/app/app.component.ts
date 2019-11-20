import { Component } from '@angular/core';
​
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' // path relatif à la racine (sinon ne fonctionne pas)
})
​
export class AppComponent { }