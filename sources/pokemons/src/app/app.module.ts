import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './pokemon/in-memory-data.service';

@NgModule({
    imports: [
        // Modules
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
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