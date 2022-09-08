import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: fit-content;
    padding: 1rem;
    border: 2px solid #0074c1;
    cursor: pointer;
    user-select: none;
    color: #0074c1;
    &:hover {
        background-color: white;
        color: #0074c1;
        border: 2px solid #0074c1;
    }
    &:active {
        background-color: #0074c1;
        border: 2px solid #0074c1;
    }
    &:disabled {
        background-color: #c3c3c3;
        border: 2px solid #c3c3c3;
        color: white;
    }
`

export default function Pagination ({selected}) {
    
    return (
        <ButtonContainer selected={selected}>
            1
        </ButtonContainer>
    )
}