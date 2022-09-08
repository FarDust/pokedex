import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GetPokemonById, GetPokemonByName, ListPokemonByName, Pokemon_V2_Pokemon } from 'src/generated/graphql';
import { PokemonType } from '../types/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('pokedex');
  }

  public listPokemonByIdentifier(identifier: string): Observable<ApolloQueryResult<PokemonType>> {
    console.log('getPokemonByIdentifier', identifier);
    if (!isNaN(parseInt(identifier))) {
      return (this.apollo.query({
        query: GetPokemonById,
        variables: {
          id: identifier
        }
      }) as Observable<ApolloQueryResult<PokemonType>>);
    } else {
      return this.apollo.query({
        query: ListPokemonByName,
        variables: {
          name: identifier
        }
      }) as Observable<ApolloQueryResult<PokemonType>>;
    }
  }

  public getPokemonByIdentifier(identifier: string): Observable<ApolloQueryResult<PokemonType>> {
    if (isNaN(parseInt(identifier))) {
      return (this.apollo.query({
        query: GetPokemonByName,
        variables: {
          name: identifier
        }
      }) as Observable<ApolloQueryResult<PokemonType>>)
    } else {
      return (this.apollo.query({
        query: GetPokemonById,
        variables: {
          id: identifier
        }
      }) as Observable<ApolloQueryResult<PokemonType>>);
    }
  }

}
