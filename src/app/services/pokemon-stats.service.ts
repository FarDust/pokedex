import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonSprites, PokemonStats } from '../types/pokemon';
import { PokedexApiService } from './pokedex-api.service';

const defaultStats: PokemonStats = {
  id: 0,
  name: '',
  sprites: plainToInstance(PokemonSprites, {}),
  height: 0,
  weight: 0
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStatsService extends Observable<PokemonStats>{
  
  pokemonStats$: BehaviorSubject<PokemonStats> = new BehaviorSubject(plainToInstance(PokemonStats, defaultStats));

  constructor(private readonly pokedexApiService: PokedexApiService) {
    super((subscriber) => { this.pokemonStats$.subscribe(subscriber) });
  }

  public getPokemonStatsByIdentifier(identifier: string): void {
    this.pokedexApiService.getPokemonByIdentifier(identifier).subscribe((response) => {
      const pokemon = response.data.pokemon_v2_pokemon[0];
      const sprites = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites);
      const types = pokemon.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type!.name);
      const pokemonStats: PokemonStats = plainToInstance(PokemonStats, {
        ...pokemon,
        sprites,
        types
      }, {excludeExtraneousValues: true});
      this.pokemonStats$.next(pokemonStats);
      console.log(pokemon, pokemonStats);
    });
  }
}
