import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { PokemonStatsService } from 'src/app/services/pokemon-stats.service';
import { PokemonStats } from 'src/app/types/pokemon';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {

  pokemon: PokemonStats;

  constructor(private readonly pokemonStatsService: PokemonStatsService) {
    this.pokemon = pokemonStatsService.pokemonStats$.getValue();
  }

  ngOnInit(): void {
    this.pokemonStatsService.subscribe((pokemonStats) => {
      this.pokemon = pokemonStats;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pokemon!.types!, event.previousIndex, event.currentIndex);
  }

}
