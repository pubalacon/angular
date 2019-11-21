import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { Router } from '@angular/router';
import { PokemonService } from './pokemon.service';
​
@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemon/list-pokemon.component.html'
})

export class ListPokemonComponent implements OnInit {
​
	pokemons: Pokemon[] = null;
​
	constructor(private router: Router, private _pokemonService : PokemonService) { }
​
	ngOnInit(): void {
		// AVEC LE MOCK
		// this.pokemons = POKEMONS;

		// AVEC LE SERVICE
		// this.pokemons = this._pokemonService.getPokemons();

		// AVEC L'API HttpClient
		this._pokemonService.getPokemons().subscribe(x => this.pokemons = x); // abonnement, si un pokemon est cree/supprime, l'ecouteur le detecte et le jeu de donnees est renvoyé a jour par le service sans reload de la page
	}
​
	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
​
}