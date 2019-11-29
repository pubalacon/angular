import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Pokemon } from "./pokemon";



@Injectable()
export class PokemonTestService {

    constructor(private db: AngularFirestore) { }

    basePath: string = 'pokemons/';

    //CRUD
    getPokemons() {
        return this.db.collection(this.basePath).snapshotChanges(); // renvoie un Observable auquel on souscrit
    }

    createPokemon(pokemon: Pokemon) {
        return this.db.collection(this.basePath).add(pokemon);
    }

    
}