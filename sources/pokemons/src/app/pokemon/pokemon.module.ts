import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { PokemonService } from "./pokemon.service";

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers:  [
        PokemonService
    ]
})

export class PokemonModule{}