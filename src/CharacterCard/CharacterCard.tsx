import { Character } from "../RickAndMortyTeam/RickAndMortyTeam";
import {
    BlacklistCharacterButton,
    CharacterCardWrapper,
    CharacterImage,
    StyledCancelIcon,
} from "./Styles";

interface Props {
    character: Character;
    blacklistCharacter(id: number): void;
    addCharacterToParty(character: Character): void;
}

export function CharacterCard({
    blacklistCharacter,
    addCharacterToParty,
    character: { id, name, image },
}: Props) {
    return <CharacterCardWrapper onClick={() => { addCharacterToParty({ id, name, image }) }}>
        <CharacterImage src={image} alt={name} />
        <BlacklistCharacterButton onClick={() => { blacklistCharacter(id) }}>
            <StyledCancelIcon/>
        </BlacklistCharacterButton>
    </CharacterCardWrapper>;
}
