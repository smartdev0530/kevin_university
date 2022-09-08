import React from 'react';
import DateTag from './DateTag';
import EventBody from './EventBody';

export default function Event (props) {
    return (
        <div className='w-full flex'>
            <DateTag date={props.date} month={props.month}></DateTag>
            <EventBody {...props}></EventBody>
        </div>
    )
}