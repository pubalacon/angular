import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
​
import { AppComponent } from './app.component'; // path relatif au repertoire courant

@NgModule({
    imports: [
        // liste des modules necessaires (plusieurs possibles)
        BrowserModule
    ], 
    declarations: [
        // liste des composants (plusieurs possibles) + Directives + Pipes
        AppComponent
    ], 
    bootstrap: [
        // sur quel module demarre l'application (1 et 1 seul listé)
        AppComponent
    ]
})
export class AppModule { }