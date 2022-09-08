import React from 'react';
import { SolidButton } from './Buttons';
import Blog from './Blog';

export default function RecentUpdates({blogs}) {
    return (
        <div className='md:mx-14 mx-3'>
            <div className='w-fit text-dark-blue text-4xl font-bold md:text-5xl'>
                Recent Updates
            </div>
            <div className='w-16 border-b-4 border-dark-yellow mb-10'></div>
            {
                blogs.map((blog, index) => {
                    return (
                        <Blog {...blog} key={index}></Blog>
                    )
                })
            }
            <div className='mt-10'></div>
            <SolidButton content='view all events'></SolidButton>
            <div className='mb-10'></div>
        </div>
    )
}