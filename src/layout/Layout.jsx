import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function Layout(props) {

    const [showNavigation, setShowNavigation] = React.useState(false);

    const ref = React.useRef();

    const handleScroll = (e) => {
        if(ref.current.scrollTop > 100) {
            props.handler(true);
        } else {
            props.handler(false);
        }
    }

    return (
        <div className='flex flex-col w-full h-screen' onScrollCapture={(e) => handleScroll(e) }>
            <div className='flex-grow-0'>
                <Header clickMenuButton={setShowNavigation} showMenu={showNavigation}></Header>
                <Navigation show={showNavigation}></Navigation>
            </div>
            <div ref={ref} className='flex flex-col flex-grow h-screen overflow-auto w-full items-center' id="body">
                {
                    props.children
                }
            </div>
        </div>
    )
}