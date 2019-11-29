import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AuthGuard } from "../auth-guard.service";
import { AuthService } from "../auth.service";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { PokemonService } from "./pokemon.service";
import { PokemonTestService } from "./pokemon-test.service";
import { PokemonFormComponent } from "./pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon.component";

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
        FormsModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        EditPokemonComponent,
        PokemonFormComponent
    ],
    providers:  [
        PokemonService,
        PokemonTestService,
        AuthService,
        AuthGuard
    ]
})

export class PokemonModule{}