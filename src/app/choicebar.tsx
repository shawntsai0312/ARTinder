'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { usePathname } from 'next/navigation';

interface ChoiceProps {
    title: string;
    color: string;
    svgPath: React.ReactElement;
    handler: () => void;
}

const handleDislike = () => {
    console.log('dislike');
}

const handleLike = () => {
    console.log('like');
}

const choices: ChoiceProps[] = [
    {
        title: 'Dislike',
        color: '#ff4860',
        svgPath: <path d="M15.4,12l4.8,4.7c1.1,1,1.1,2.4,0,3.5c-0.8,1.1-2.4,1.1-3.4,0L12,15.5l-4.7,4.6c-1,1.1-2.4,1.1-3.5,0
        c-1.1-0.8-1.1-2.4,0-3.4L8.5,12L3.9,7.3c-1.1-1-1.1-2.4,0-3.4C4.5,3,5.7,2.7,6.6,3.3C6.8,3.5,7,3.7,7.1,3.9L12,8.4l4.7-4.6
        c1-1.1,2.4-1.1,3.4,0c1.1,0.8,1.1,2.4,0,3.4L15.4,12z" />,
        handler: handleDislike
    },
    {
        title: 'Like',
        color: '#38f8c0',
        svgPath: <path d="M22,10.2C22,6.6,19.6,4,16.3,4c-1.8,0-2.7,0.6-4.3,2.1C10.5,4.7,9.5,4,7.7,4C4.4,4,2,6.6,2,10.2c0,1.5,0.5,2.9,1.5,4.1
        l8,7.4c0.2,0.2,0.6,0.2,0.9,0l7.2-6.6l0.4-0.4l0.2-0.2l0.2-0.2C21.5,13.2,22,11.7,22,10.2" />,
        handler: handleLike
    },
];

const Choicebar = () => {

    const pathname = usePathname();
    return (
        <>
            {
                pathname === '/home' ?
                    <div className='flex items-center fixed h-max w-full justify-around' >
                        {choices.map((choice, index) => (
                            <IconButton
                                key={index}
                                sx={{
                                    height: '100%',
                                    width: '80px',
                                    fill: `${choice.color}`
                                }}
                                onClick={choice.handler}
                            >
                                <svg version="1.1" id="圖層_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"
                                    style={{ background: 'new 0 0 24 24' }} xmlSpace="preserve"
                                >
                                    {/* scale r, xy translate 12*(1-r) */}
                                    <g className='scale-[0.425] translate-x-[6.9px] translate-y-[6.9px]
                                    hover:scale-[0.475] hover:translate-x-[6.3px] hover:translate-y-[6.3px]
                                    transistion duration-200 ease-in-out'>
                                        {choice.svgPath}
                                    </g>
                                    <g>
                                        <circle cx="12" cy="12" r="10" fill="none" stroke={choice.color} stroke-width="0.5" />
                                    </g>
                                </svg>
                            </IconButton>
                            // </div>
                        ))}
                    </div>
                    : null
            }
        </>
    );
}

export default Choicebar;