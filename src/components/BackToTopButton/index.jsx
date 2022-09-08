import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export default function BackToTopButton ({show}) {

    const [animation, setAnimation] = React.useState(false);

    const handleClick = () => {
        setAnimation(true);
    }

    React.useEffect(() => {
        const dist = document.getElementById("body").scrollTop / 20;
        if(animation) {
            const myInterval = setInterval(() => {
                if(document.getElementById("body").scrollTop >= 0) {
                    document.getElementById("body").scrollTop = document.getElementById("body").scrollTop - dist;
                    if(document.getElementById("body").scrollTop === 0) {
                        clearInterval(myInterval);
                        setAnimation(false);
                    }
                }
            }, 10);            
        }
    }, [animation])


    
    
    return (
        show && <div className='flex items-center fixed right-8 bottom-6' onClick={() => handleClick()}>
            <div className='text-black-6 mr-3'>Back to Top</div>
            <div className='flex items-center justify-center rounded-full w-12 h-12 bg-light-sky'>
                <FontAwesomeIcon icon={faArrowUp} className="text-dark-blue"></FontAwesomeIcon>
            </div>
        </div>
    )
}