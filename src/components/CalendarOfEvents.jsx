import React from 'react';
import { SolidButton } from './Buttons';
import Event from './Event';

export default function CalendarOfEvents({ events }) {
    return (
        <div className='md:mx-14 mx-3'>
            <div className='w-fit text-dark-blue text-4xl font-bold md:text-5xl'>
                Calendar of Events
            </div>
            <div className='w-16 border-b-4 border-dark-yellow mb-10'></div>
            {
                events.length > 0 && events.map((event, index) => {
                    return (
                        <Event {...event} bottomLine={index < events.length - 1} key={index}></Event>
                    )
                })
            }
            <div className='mt-6'></div>
            <SolidButton content='view all events'></SolidButton>
            <div className='mb-32'></div>
        </div>
    )
}