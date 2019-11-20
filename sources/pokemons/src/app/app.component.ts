import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
​
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' // path relatif à la racine (sinon ne fonctionne pas)
})
​
export class AppComponent implements OnInit {
​    private title: string = "Liste des pokémons";
    private pokemons: Pokemon[];
​
    constructor() { 
​
    }

    selectPokemon(pokemon: Pokemon) {
        alert("Vous avez cliqué sur " + pokemon.name);
    }
​
    ngOnInit() {
        this.pokemons = POKEMONS;
    }
}