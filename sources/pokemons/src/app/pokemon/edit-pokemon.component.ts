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
        
        // AVEC LE SERVICE ET LE MOCK
        //this.pokemon = this._pokemonService.getPokemon(id);

        // AVEC L'API
        this._pokemonService.getPokemon(id).subscribe(x => this.pokemon = x); // abonnement, si un pokemon est cree/supprime, l'ecouteur le detecte et le jeu de donnees est renvoyé a jour par le service sans reload de la page
    }
    
​}