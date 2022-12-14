import React from 'react';

export default function LinkPanel() {
    const services = [
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
        {
            serviceName: 'Overview and history of the South Carolina State Budget',
            link: '#'
        },
    ]
    return (
        <div className='container sm:px-auto px-3 mt-10'>
            <h1 className='uppercase text-2xl font-bold'>popular services and links</h1>
            <div className='bg-dark-blue h-2 w-full mt-5 mb-5'></div>
            <div className='w-full flex flex-wrap justify-between mt-5 bg-white gap-1 p-4'>
                {
                    services.map((service, index) => {
                        return (
                            <a href={service.link} className='max-w-xs target:shadow-lg mb-3 text-blue underline underline-offset-1' key={index}>
                                {service.serviceName}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}