import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class PokemonService {
    // Datas en base de donnees memoire
    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) {}

    getPokemons() : Observable<Pokemon[]> {
        const url = `${this.pokemonsUrl}`;
        return this.http.get<Pokemon[]>(url);
    }

    getPokemon(id: number) : Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.get<Pokemon>(url);
    }
    
    updatePokemon(pokemon : Pokemon) : Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        let options = { headers: new HttpHeaders({
            "Content-Type": "application/json"})
        };

        return this.http.put<Pokemon>(url, pokemon, options);
    }

    deletePokemon(id: number) : Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;
        let options = { headers: new HttpHeaders({
            "Content-Type": "application/json"})
        };

        return this.http.delete<Pokemon>(url, options);
    }

    // Retourne la liste des types des Pokémons
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

}