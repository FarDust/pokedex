import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStatsComponent } from './pokemon-stats.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    PokemonStatsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    PokemonStatsComponent
  ]
})
export class PokemonStatsModule { }
