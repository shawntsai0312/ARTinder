'use client'
import Card from '../card/card'

const home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden relative">
            <Card name='test name' discrption='test discription' />
            {/* <p className='absolute'>hello</p> */}
        </div>
    )
}

export default home;