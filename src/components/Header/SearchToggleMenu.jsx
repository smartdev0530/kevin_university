import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StrokeButton } from '../Buttons';

export default function SearchToggleMenu() {

    const [showSearchMenu, setShowSearchMenu] = React.useState(false);

    const searchButtonStyle = {
        border: '1px solid white',
        color: 'white',
        marginLeft: '20px'
    }

    return (
        <div className='h-10 w-10 mr-4 flex flex-col items-end'>
            <button className='w-10 h-10 text-light-blue border-light-blue border-2 rounded-md hover:bg-light-blue hover:text-white focus:bg-light-blue focus:text-white' onClick={() => setShowSearchMenu(!showSearchMenu)}>
                <div className='h-10 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faSearch} className='m-auto' />
                </div>
            </button>
            {
                showSearchMenu && <div className='flex p-4 bg-light-blue rounded-sm z-40' id="searchBar">
                    <input placeholder='Enter search term' className='px-2 py-3 text-lg placeholder:text-black-75 focus:outline-none'></input>
                    <StrokeButton content='search' disabled={false} styles={searchButtonStyle}></StrokeButton>
                </div>
            }
        </div>

    )
}