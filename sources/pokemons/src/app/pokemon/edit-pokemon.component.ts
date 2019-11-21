import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'edit-pokemon',
    templateUrl: './app/pokemon/edit-pokemon.component.html'
})

export class EditPokemonComponent implements OnInit {

    pokemon : Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private _pokemonService : PokemonService ) { }

	ngOnInit() {
        /*
        let id: number;
        id = +this.route.snapshot.paramMap.get("id");  // le param est une string, cela permet de le caster
        // ou 
        */

        let id = +this.route.snapshot.paramMap.get("id");

		this.pokemon = this._pokemonService.getPokemon(id);
    }
    
​}