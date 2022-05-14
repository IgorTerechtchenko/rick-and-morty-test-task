import { useLazyQuery } from '@apollo/client';
import { CHARACTERS_QUERY } from './queries';

export function useCharacterSearch() {
    return useLazyQuery(
        CHARACTERS_QUERY,
    );
}
