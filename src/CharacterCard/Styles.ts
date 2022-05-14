import styled from "styled-components";
import { ReactComponent as DeleteIcon } from './delete-icon.svg';

export const CharacterCardWrapper = styled.li`
    list-style: none;
    position: relative;
`;

export const CharacterImage = styled.img`
    width: 165px;
    height: 220px;
    object-fit: cover;
`;

export const BlacklistCharacterButton = styled.button`
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 100%;
    padding: 0;
`;

export const StyledCancelIcon = styled(DeleteIcon)`
    margin: 5px;
`;
