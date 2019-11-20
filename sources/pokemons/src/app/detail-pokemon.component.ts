import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
​
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
​
    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
​
    constructor(private route: ActivatedRoute, private router: Router) { }
​
    ngOnInit(): void {
        
        let id: number;
        let i: number;

        // Récupérer la liste des pokémons
        this.pokemons = POKEMONS;

        id = +this.route.snapshot.paramMap["id"];  // le param est une string, cela permet de le caster

        /*
        // avec boucle for
        for(i=0; i<this.pokemons.length; i++) {
            if (this.pokemons[i].id==id) {
                this.pokemon = this.pokemons[i];
                break;
            }
        }

        // ou avec forEach et une fonction lambda
        this.pokemons.forEach( x => {
            if (x.id==id) {
                this.pokemon = x;
            }
        });

        // ou avec un filtre sur le tableau
        */

        this.pokemon = this.pokemons.filter(x => x.id==id) [0];
            
    }
​
    goBack(): void {
        // Méthode qui permet de revenir sur la page /pokemons
        this.router.navigate(['/pokemons']);
    }
}





