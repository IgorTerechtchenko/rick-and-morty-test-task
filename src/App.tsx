import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";
import { RickAndMortyTeam } from './RickAndMortyTeam/RickAndMortyTeam';

const API_LINK = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: API_LINK,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RickAndMortyTeam/>
      </div>
    </ApolloProvider>
  );
}

export default App;
