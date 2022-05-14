import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
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
