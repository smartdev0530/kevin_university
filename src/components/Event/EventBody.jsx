import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const DetailedInfo = ({ info, icon }) => {
    return (
        <div className='flex my-1'>
            <div className='flex w-6 h-7 items-center justify-center'>
                <FontAwesomeIcon icon={icon} className='text-dark-yellow' fontSize={16}></FontAwesomeIcon>
            </div>
            <div className=' text-lg text-black-3 max-w-sm'>
                {
                    info
                }
            </div>
        </div>
    )
}

export default function EventBody({ status, meetingTitle, location, time, contactNumber, bottomLine }) {
    return (
        <div className='ml-4'>
            
            {
                status && <div className={`rounded-sm text-xs p-1 w-fit ${status === 'Updated' ? 'bg-light-yellow text-black-3' : 'bg-red text-white'}`}>
                    { status }
                </div>
            }
            <div className=' text-xl font-medium text-black-3'>
                {
                    meetingTitle
                }
            </div>
            <DetailedInfo info={location} icon={faLocationDot}></DetailedInfo>
            <DetailedInfo info={time} icon={faClock}></DetailedInfo>
            <DetailedInfo info={contactNumber} icon={faIdBadge}></DetailedInfo>
            {
                bottomLine && <div className='w-full border-b border-blue-gray my-5'></div>
            }
        </div>
    )
}