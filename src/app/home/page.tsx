'use client'
import Choicebar from "./choicebar";
import { useRef, useEffect, useState } from 'react';
import Deck from './deck';
import users from '../../../public/resource/homeData/users.json'

const home = () => {
    const [currCardIndex, setCurrCardIndex] = useState<number>(users.length - 1);

    const [likeRate, setLikeRate] = useState<number>(0);
    const [dislikeRate, setDislikeRate] = useState<number>(0);

    const [choices, setChoices] = useState<Array<'like' | 'dislike' | 'none'>>(new Array(users.length).fill('none'));

    useEffect(() => {
        if (likeRate >= 5.5) setLikeRate(0);
        // console.log('likeRate', likeRate);
    }, [likeRate])

    useEffect(() => {
        if (dislikeRate >= 5.5) setDislikeRate(0);
        // console.log('dislikeRate', dislikeRate);
    }, [dislikeRate])

    useEffect(() => {
        console.log('choices', choices);
        handleCardSwipe();
    }, [choices])

    useEffect(() => {
        console.log('currCardIndex', currCardIndex);
    }, [currCardIndex])

    const handleCardSwipe = () => {
        console.log('handleCardSwipe')
    };

    return (
        <div className="justify-center items-center h-full w-full overflow-y relative">
            <Deck setLikeRate={setLikeRate} setDislikeRate={setDislikeRate}
                choices={choices} setChoices={setChoices}
                setCurrCardIndex={setCurrCardIndex}
            />
            <div className="w-full h-[44px] fixed flex justify-center bottom-[80px] z-30">
                <Choicebar likeRate={likeRate} dislikeRate={dislikeRate}
                    currCardIndex={currCardIndex} choices={choices} setChoices={setChoices}
                    setLikeRate={setLikeRate} setDislikeRate={setDislikeRate}
                />
            </div>
        </div>
    )
}

export default home;