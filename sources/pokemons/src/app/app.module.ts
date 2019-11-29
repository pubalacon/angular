import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './pokemon/in-memory-data.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from './environment';

@NgModule({
    imports: [
        // Modules
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        PokemonModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        // Components + Directives + Pipes
        AppComponent, 
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
        AngularFirestore
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }