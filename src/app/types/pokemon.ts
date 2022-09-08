import { Expose, Transform, Type } from "class-transformer";
import { Pokemon_V2_Pokemon } from "src/generated/graphql";

export type PokemonType = { pokemon_v2_pokemon: Pokemon_V2_Pokemon[] }
export type PokemonStatsResponse = Partial<Pokemon_V2_Pokemon> & { id: Number, name: string }

export class PokemonStats {
  @Expose()
  id?: PokemonStatsResponse['id'];

  @Expose()
  name?: PokemonStatsResponse['name'];

  @Expose()
  height: PokemonStatsResponse['height'];

  @Expose()
  weight: PokemonStatsResponse['weight'];

  @Expose()
  @Type(() => PokemonSprites)
  sprites?: PokemonSprites;

  @Expose()
  types?: string[];
}

export class PokemonSprites {
  @Expose()
  @Type(() => URL)
  front_default?: URL;

  @Expose()
  @Type(() => URL)
  back_default?: URL;

  @Expose()
  @Type(() => URL)
  front_shiny?: URL;

  @Expose()
  @Type(() => URL)
  back_shiny?: URL;
}