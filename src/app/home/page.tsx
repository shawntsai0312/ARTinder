'use client'
import Choicebar from "./choicebar";
import { use, useEffect, useState } from 'react';
import Deck from './deck';

const home = () => {
    const [likeRate, setLikeRate] = useState<number>(0);
    const [dislikeRate, setDislikeRate] = useState<number>(0);

    const [like, setLike] = useState<boolean>(false);
    const [dislike, setDislike] = useState<boolean>(false);

    useEffect(() => {
        if (likeRate >= 5.5) setLikeRate(0);
        // console.log('likeRate', likeRate);
    }, [likeRate])

    useEffect(() => {
        if (dislikeRate >= 5.5) setDislikeRate(0);
        // console.log('dislikeRate', dislikeRate);
    }, [dislikeRate])

    useEffect(() => {
        console.log('like', like);
    }, [like])

    useEffect(() => {
        console.log('dislike', dislike);
    }, [dislike])

    return (
        <div className="justify-center items-center h-full w-full overflow-y relative">
            <Deck setLikeRate={setLikeRate} setDislikeRate={setDislikeRate}
                like={like} dislike={dislike}
                setLike={setLike} setDislike={setDislike}
            />
            <div className="w-full h-[44px] fixed flex justify-center bottom-[80px] z-30">
                <Choicebar likeRate={likeRate} dislikeRate={dislikeRate}
                    setLikeRate={setLikeRate} setDislikeRate={setDislikeRate}
                    setLike={setLike} setDislike={setDislike}
                />
            </div>
        </div>
    )
}

export default home;