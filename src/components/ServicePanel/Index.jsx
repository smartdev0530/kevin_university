import React from 'react';

const Card = ({ imgsrc, content }) => {
    return (
        <div className='h-60 bg-white p-10 flex flex-col items-center justify-center w-60 justify-self-center mb-3'>
            <img src={imgsrc} alt="back" className='w-24 h-40' />
            <div className='text-xl text-center font-bold'>{content}</div>
        </div>
    )
}

export default function ServicePanel() {

    const cards = [
        {
            imgsrc: './assets/images/Data-Research-Icon.svg',
            content: 'DATA & RESEARCH'
        },
        {
            imgsrc: './assets/images/Geography-Icon.svg',
            content: 'GEOGRAPHY & MAPPING'
        },
        {
            imgsrc: './assets/images/Programs-Icon.svg',
            content: 'PROGRAMS & SERVICES'
        },
        {
            imgsrc: './assets/images/Legislative-Icon.svg',
            content: 'DALEGISLATIVE FISCAL IMPACTS'
        }
    ]

    return (
        <div className='w-full h-fit grid sm:grid-cols-2 lg:grid-cols-4 place-content-around  bg-black-E1 gap-1 p-4'>
            {
                cards.map((card, index) => {
                    return (
                        <Card {...card} key={index} />
                    )
                })
            }
        </div>
    )
}