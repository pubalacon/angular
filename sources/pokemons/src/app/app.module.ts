import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
    imports: [
        // Modules
        BrowserModule,
        PokemonModule,
        AppRoutingModule
    ],
    declarations: [
        // Components + Directives + Pipes
        AppComponent, 
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }