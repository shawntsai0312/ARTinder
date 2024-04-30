'use client'
import Card from '../card/card'
import users from '../../../public/resource/homeData/users.json'
import Choicebar from "./choicebar";

const home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full overflow-y relative">
            <Card name={users[1].name} discrption={users[1].discription} imgUrl={users[1].url} />
            {/* <p className='absolute'>hello</p> */}
            <div className="w-full h-[44px] fixed flex justify-center bottom-[80px] z-30">
                < Choicebar />
            </div>
        </div>
    )
}

export default home;