import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: fit-content;
    heigth: 100%;
    padding: 1rem;
    border: 2px solid #0074c1;
    cursor: pointer;
    user-select: none;
    color: white;
    text-transform: uppercase;
    background-color: #0074c1;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #3068ad;
        color: white;
    }
    &:active {
        background-color: #1b3a61;
        border: 2px solid #1b3a61;
    }
    &:disabled {
        background-color: #c3c3c3;
        border: 2px solid #c3c3c3;
        color: white;
    }
`

export default function SolidButtonIcon ({content, icon, disabled=true}) {
    return (
        <ButtonContainer disabled={disabled}>
            <div className='mr-2'>
                {content}
            </div>
            <FontAwesomeIcon fontSize={20} icon={faSearch}></FontAwesomeIcon>
        </ButtonContainer>
    )
}