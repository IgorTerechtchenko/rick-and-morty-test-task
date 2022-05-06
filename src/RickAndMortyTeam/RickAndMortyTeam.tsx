import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { Party } from '../Party';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';
import { isMorty, isRick } from './utils';

const CHARACTERS_QUERY = gql`
  query Characters($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        name
        id
        image
      }
    }
  }
`;

export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface PartyType {
  Rick?: Character;
  Morty?: Character;
}

export function RickAndMortyTeam() {
    const [search, { data }] = useLazyQuery(
        CHARACTERS_QUERY,
    );

    const [blacklist, setBlacklist] = useState<number[]>([]);
    const [party, setParty] = useState<PartyType>({});

    function blacklistCharacter(id: number) {
      setBlacklist([...blacklist, id]);
    }

    function addCharacterToParty(character: Character) {
      if (isRick(character.name)) {
        setParty({
          ...party,
          Rick: character,
        });
      } else if (isMorty(character.name)) {
        setParty({
          ...party,
          Morty: character,
        });
      }
    }

    const filteredCharacters = data?.characters?.results.filter((character: Character) => {
      return !blacklist.includes(character.id);
    });

    return <div>
      <SearchBar search={search} />
      {
        filteredCharacters
          && <SearchResults
            characters={filteredCharacters}
            addCharacterToParty={addCharacterToParty}
            blacklistCharacter={blacklistCharacter}
          />
      }
      <Party party={party}/>
    </div>;
}
