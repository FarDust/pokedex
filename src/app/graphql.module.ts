import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_NAMED_OPTIONS, NamedOptions} from 'apollo-angular';
import {InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://beta.pokeapi.co/graphql/v1beta'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): NamedOptions {
  return {
    pokedex: {
      link: httpLink.create({ uri }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
