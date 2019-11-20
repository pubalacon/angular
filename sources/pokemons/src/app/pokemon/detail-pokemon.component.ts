import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
​
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
​
    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
​
    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private _pokemonService : PokemonService ) { }
​
    ngOnInit(): void {
        
        let id: number;

        id = +this.route.snapshot.paramMap.get("id");  // le param est une string, cela permet de le caster

        /*
        // Récupérer la liste des pokémons
        this.pokemons = POKEMONS;
        let i: number;

        // avec boucle for
        for(i=0; i<this.pokemons.length; i++) {
            if (this.pokemons[i].id==id) {
                this.pokemon = this.pokemons[i];
                //break;
            }
        }
        */
        
        /*
        // ou avec forEach et une fonction lambda
        this.pokemons.forEach( x => {
            if (x.id==id) {
                this.pokemon = x;
            }
        });
       
        // ou avec un filtre sur le tableau
        //this.pokemon = this.pokemons.filter(x => x.id==id) [0];
        */

        // avec le service
        this.pokemon = this._pokemonService.getPokemons().filter(x => x.id==id)[0];
            
    }
​
    goBack(): void {
        // Méthode qui permet de revenir sur la page /pokemons
        this.router.navigate(['/pokemons']);
    }

    goEdit(pokemon : Pokemon): void {
        // Méthode qui permet d'éditer le pokemon

        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
}





