import React from 'react';
import { MenuButton } from '../Buttons';
import Logo from './Logo';
import styled from 'styled-components';
import SearchToggleMenu from './SearchToggleMenu';

const Button = styled.div`
    text-transform: uppercase;
    color: #1B3A61;
    cursor: pointer;
    margin-right: 2rem;
    @media (max-width: 1024px) {
        display: none;
    }
`

export default function Header({ clickMenuButton, showMenu }) {
    const handleMenuButton = () => {
        clickMenuButton(!showMenu);
    }
    return (
        <div className={`w-full h-20 flex items-center justify-between md:h-24 ${showMenu ? 'border-b-blue-gray border-b-4' : 'border-b-blue border-b-4'}`}>
            <div className='flex items-center h-full'>
                <MenuButton opened={showMenu} onClick={handleMenuButton}></MenuButton>
                <div className='ml-8'></div>
                <Logo></Logo>
            </div>
            <div className='flex items-center h-full'>
                <Button className='hover:border-b-2'>about us</Button>
                <Button className='hover:border-b-2'>events</Button>
                <Button className='hover:border-b-2'>boards & committees</Button>
                <SearchToggleMenu></SearchToggleMenu>
            </div>
        </div>
    )
}