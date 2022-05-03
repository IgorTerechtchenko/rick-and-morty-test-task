import { CharacterImage } from "../CharacterCard/Styles";
import { PartyType } from "../RickAndMortyTeam/RickAndMortyTeam";
import { InnerParty, Name, PartyCharacter, PartyHeader, PartyWrapper } from "./Styles";

interface Props {
    party: PartyType;
}

export function Party({ party: { Rick, Morty } }: Props) {
    return <PartyWrapper>
        <PartyHeader> PARTY </PartyHeader>
        <InnerParty>
            {Rick
                ? <CharacterImage src={Rick.image} alt={Rick.name} />
                : <PartyCharacter>
                    <Name> RICK </Name>
                </PartyCharacter>
            }
            {Morty
                ? <CharacterImage src={Morty.image} alt={Morty.name} />
                : <PartyCharacter>
                    <Name> MORTY </Name>
                </PartyCharacter>
            }
        </InnerParty>
    </PartyWrapper>;
}
