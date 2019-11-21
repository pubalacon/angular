import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
​
import { AuthGuard } from '../auth-guard.service';
​
import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';

const pokemonsRoutes: Routes = [
	{ 
		path: 'pokemon', 
		canActivate: [AuthGuard], // securité
		children: [
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent },
		], // path enfants qu'on peut acceder (ou pas) selon la securité
	}

];
​
@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})

export class PokemonRoutingModule { }