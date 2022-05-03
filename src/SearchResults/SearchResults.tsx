import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Character } from '../RickAndMortyTeam/RickAndMortyTeam';
import { ResultsWrapper } from './Styles';

interface Props {
    characters: Character[];
    blacklistCharacter(id: number): void;
    addCharacterToParty(character: Character): void;
}

export function SearchResults({ addCharacterToParty, blacklistCharacter, characters }: Props) {
    return <ResultsWrapper>
        {
            characters.map((character: Character) => {
                return <CharacterCard
                    character={character}
                    addCharacterToParty={addCharacterToParty}
                    blacklistCharacter={blacklistCharacter}
                    key={character.id}
                />;
            })
        }
  </ResultsWrapper>;
}
