import React from 'react';

export default function Footer () {

    const info = [
        'Privacy Statement',
        'FOIA',
        'Disclosures and Reporting',
        'Report Fraud',
        'Accessibility',
        'Contact Us'
    ]

    const offices = [
        {
            type: 'main office',
            location: '1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201',
        },
        {
            type: 'main office',
            location: '1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201',
        },
        {
            type: 'main office',
            location: '1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201',
        }
    ]

    return (
        <div className='w-full h-fit py-8 px-4 bg-dark-blue flex justify-around md:flex-row flex-col md:justify-around items-start'>
            <div className='pb-12'>
                <div className='text-white font-bold text-lg'>
                    South Caronlina
                </div>
                <div className='text-white font-bold text-lg'>
                    Revenue and Fiscal Affairs Office
                </div>
                <img src='assets/images/Group 262.png' className='w-24 h-24' alt='logo'></img>
            </div>
            <div className='pb-12'>
                {
                    info.map((information, index) => {
                        return (
                            <div className='text-black-cc text-base' key={index}>
                                {
                                    information
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col justify-between h-full'>
                {
                    offices.map((office, index) => {
                        return (
                            <div className='max-w-sm mb-2' key={index}>
                                <div className='uppercase text-black-cc text-base'>
                                    {
                                        office.type
                                    }
                                </div>
                                <div className='text-black-E1 text-sm'>
                                    {
                                        office.location
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}