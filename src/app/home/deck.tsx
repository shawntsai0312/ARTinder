'use client'
import Card from '../card/card'
import users from '../../../public/resource/homeData/users.json'
import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const to = (i: number) => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1
})
const from = (_i: number) => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1
})
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
    `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = ({ setLikeRate, setDislikeRate, choices, setChoices, setCurrCardIndex }:
    {
        setLikeRate: Dispatch<SetStateAction<number>>,
        setDislikeRate: Dispatch<SetStateAction<number>>,
        choices: Array<'like' | 'dislike' | 'none'>,
        setChoices: Dispatch<SetStateAction<Array<'like' | 'dislike' | 'none'>>>,
        setCurrCardIndex: Dispatch<SetStateAction<number>>
    }) => {
    const [gone, setGone] = useState<Set<number>>(() => new Set())

    const [clickPositionY, setClickPositionY] = useState<number>(0);
    const [down, setDown] = useState<boolean>(false);
    const animatedDivRef = useRef<HTMLDivElement>(null);
    const [rotateDirection, setRotateDirection] = useState<number>(1);

    const handleClick = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        // Get the position of the interaction relative to the viewport
        const interactionY = event.type === 'touchstart' ?
            (event as React.TouchEvent<HTMLDivElement>).touches[0].clientY
            : (event as React.MouseEvent<HTMLDivElement>).clientY;

        // Get the position of the div relative to the viewport
        const divRect = animatedDivRef.current?.getBoundingClientRect();
        const divCenterY = divRect ? divRect.height / 2 : 0;

        // Calculate the interaction position relative to the center of the div
        const interactionRelativeY = divRect ? interactionY - divRect.top - divCenterY : 0;

        // Update state with the interaction position
        setClickPositionY(interactionRelativeY);
    };

    useEffect(() => {
        if (down) {
            // console.log('clickPositionY', clickPositionY);
            if (clickPositionY > 0) setRotateDirection(-1);
            else setRotateDirection(1);
        }
    }, [down])

    const [props, api] = useSprings(users.length, i => ({
        ...to(i),
        from: from(i),
    }))

    const bind = useDrag(({ args: [index], down, movement }) => {
        const triggerDistance = window.innerWidth / 3;
        const trigger = (Math.abs(movement[0]) >= triggerDistance);

        setDown(down);

        if (!down && trigger) {

            setGone(prev => {
                const newArray = Array.from(prev); // Convert the existing Set to an array
                newArray.push(index); // Add the new index to the array
                return new Set<number>(newArray); // Create a new Set from the updated array
            });
        }

        api.start(i => {
            // console.log(i,choices[i])
            if (index !== i) return
            let isGone = gone.has(index)

            let x = 0, y = 0;
            if (isGone) {
                x = 2 * window.innerWidth * movement[0] / Math.abs(movement[0])
                y = 0;
            } else {
                if (down) {
                    x = movement[0];
                    y = movement[1];
                } else {
                    if (choices[i] === 'like') {
                        x = 2 * window.innerWidth;
                        console.log('click like')
                    }
                    else if (choices[i] === 'dislike') {
                        x = -2 * window.innerWidth;
                        console.log('click dislike')
                    }
                    else x = 0;
                    y = 0;
                }
            }

            let rot = isGone ? 0 : x / 20 * rotateDirection
            let scale = 1;

            if (!down && trigger) {
                x = 2 * window.innerWidth * movement[0] / Math.abs(movement[0]);
                y = 0;

                let newChoices = [...choices];
                if (x > 0) newChoices[i] = 'like';
                if (x < 0) newChoices[i] = 'dislike';
                if (x === 0) newChoices[i] = 'none';
                setChoices(newChoices);

                console.log(
                    'trigger', trigger,
                    'x', x,
                    'y', y,
                )
            }

            if (x >= 2 * window.innerWidth || x <= -2 * window.innerWidth) setCurrCardIndex(index - 1);

            setLikeRate(x >= 0 ? x / triggerDistance : 0);
            setDislikeRate(x <= 0 ? -x / triggerDistance : 0);

            return {
                x,
                y,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
            }
        })
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

    return (
        <div className='w-full h-full will-change-transform items-center justify-center touch-none'>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className='w-full h-full absolute flex will-change-transform items-center justify-center touch-none'
                    style={{
                        x, y,
                        transform: interpolate([rot, scale], trans)
                    }}
                    {...bind(i)}
                    ref={animatedDivRef}
                    onMouseMove={handleClick}
                >
                    <Card name={users[i].name} discrption={users[i].discription} imgUrl={users[i].url} />
                </animated.div>
            ))}
        </div>
    )
}

export default Deck;