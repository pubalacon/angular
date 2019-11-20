import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";


@Injectable()
export class PokemonService {
    // methode retourne tous les pokemons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number) : Pokemon {
        let pokemons = this.getPokemons();
    
        for(let index = 0; index < pokemons.length; index++) {
            if(id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    // Retourne la liste des types des Pokémons
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}