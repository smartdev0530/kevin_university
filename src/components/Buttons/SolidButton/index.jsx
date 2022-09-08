import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: fit-content;
    background-color: #0074c1;
    text-transform: uppercase;
    padding: 1rem;
    border: 2px solid #0074c1;
    cursor: pointer;
    user-select: none;
    color: white;
    &:hover {
        background-color: #225089;
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

export default function SolidButton ({content="Solid Button"}) {
    return (
        <ButtonContainer>
            {
                content
            }
        </ButtonContainer>
    )
}