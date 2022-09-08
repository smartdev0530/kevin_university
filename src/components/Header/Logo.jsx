import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    text-transform: uppercase;
    color: #1B3A61;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const SubTitle = styled.div`
    color: #93A4BD;
    font-style: italic;
    @media (max-width: 768px) {
        display: none;
    }
`

export default function Logo () {

    const [alpha, setAlpha] = React.useState(1);

    return (
        <div className='flex items-center cursor-pointer' onMouseOver={() => setAlpha(0.4)} onMouseLeave={() => setAlpha(1)}>
            <img src='/assets/images/RFA Logo Final.png' className='md:w-20 md:h-20 w-16 h-16 hover:opacity-40' alt="Logo" alpha={alpha}/>
            <div className='flex flex-col justify-start ml-2'>
                <Title>
                    south carolina
                </Title>
                <Title>
                    revenue and fiscal affairs office
                </Title>
                <SubTitle>
                    Transforming data into solutions for South Carolina
                </SubTitle>
            </div>
        </div>
    )
}