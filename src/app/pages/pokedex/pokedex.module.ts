import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokemonFinderModule } from 'src/app/components/pokemon-finder/pokemon-finder.module';
import { PokemonStatsModule } from 'src/app/components/pokemon-stats/pokemon-stats.module';


@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule, 
    PokemonFinderModule,
    PokemonStatsModule
  ]
})
export class PokedexModule { }
