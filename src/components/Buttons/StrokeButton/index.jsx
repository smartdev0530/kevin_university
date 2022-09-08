import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: fit-content;
    padding: 1rem;
    border: 2px solid #0074c1;
    cursor: pointer;
    user-select: none;
    color: #0074c1;
    text-transform: uppercase;
    &:hover {
        background-color: #0074c1;
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

export default function StrokeButton ({disabled=true, content='Stroke Button', styles={}}) {
    return (
        <ButtonContainer disabled={disabled} style={styles}>
            {
                content
            }
        </ButtonContainer>
    )
}