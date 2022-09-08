import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';
import {MatPaginator} from '@angular/material/paginator';
import { PokemonStatsService } from 'src/app/services/pokemon-stats.service';
@Component({
  selector: 'app-pokemon-finder',
  templateUrl: './pokemon-finder.component.html',
  styleUrls: ['./pokemon-finder.component.scss']
})
export class PokemonFinderComponent implements OnInit {

  pokemonIdentifier = new FormControl('');
  pokemons: any[] = [];
  pokemonsData: any[] = [];
  length = 0;
  pageSize = 3;
  
  @Input()
  startIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private readonly pokedexApiService: PokedexApiService, private readonly pokemonStatsService: PokemonStatsService) {
    this.pokemonIdentifier.valueChanges.subscribe(value => {
      console.log(value);
      if (value) {
        this.pokedexApiService.listPokemonByIdentifier(value).subscribe(result => {
          console.log(result);
          this.pokemonsData = result.data.pokemon_v2_pokemon;
          this.length = this.pokemonsData.length;
          this.startIndex = this.pageEvent ? this.pageEvent.pageIndex : 0 * this.pageSize;
          this.pokemons = this.pokemonsData.slice(this.startIndex, this.startIndex + this.pageSize);
        });
      }
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((pageEvent: PageEvent) => {
      this.pageEvent = pageEvent;
      this.startIndex = pageEvent.pageIndex * this.pageSize;
      this.pokemons = this.pokemonsData.slice(this.startIndex, this.startIndex + this.pageSize);
      console.log(this.pokemons);
    });
  }

  setPokemon(identifier: string): void {
    console.log(`Clicked on ${identifier}`);
    this.pokemonStatsService.getPokemonStatsByIdentifier(identifier);
  }
}
