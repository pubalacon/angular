import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
    // ou
    //{ path: '404', component: PageNotFoundComponent },
    //{ path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }