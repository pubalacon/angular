import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
    selector: 'my-app', 
    templateUrl: './app/app.component.html' // path relatif à la racine (sinon ne fonctionne pas)
})

export class AppComponent implements OnInit {
    private title: string = "Liste de Pokemons";
    private pokemons: Pokemon[];
    // private value1: string = "";
    // private value2: string = "";
    // private value3: string = "";
    // private myBoolean = false;

    constructor() { // init de classes ou de services

    }

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    // onClickTest() { // gestion evenement Click
    //     console.log("Click !");
    // }

    // en specifiant le type
    // onKey($event: KeyboardEvent) {
    //     this.value = "Happy Birthday " + (<HTMLInputElement>$event.target).value;
    // }

    // pour tout type d'evenement
    // onKey($event: any) {
    //     this.value1 = "Happy Birthday " + ($event.target).value;
    // }

    // onKeyup(value: string) {
    //     this.value2 = "Good Night " + value;
    // }

    selectPokemon(pokemon: Pokemon) {
        console.log("Clic sur le pokemon "+pokemon.name)
    }

    ngOnDestroy() {
        this.pokemons = null;
    }

}