
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type conversationType = {
    members: [],
    _id: string
}

type userType = {
    _id: string,
    userName: string,

}
const endpoint: string = "http://localhost:9000/api/v1"

function ActiveChat({ conversation, user }: { conversation: conversationType, user: string }) {
    const [getUser, setGetuser] = useState<userType | null>()
    console.log(conversation.members)
    useEffect(() => {
        const friendId = conversation?.members?.find((c: string) => c !== user)

        const fetchType = async () => {
            await axios.get(`${endpoint}/user?userId=${friendId}`).then((res) => {
                setGetuser(res.data)
                console.log(res.data)
            })
        }
        fetchType()

    }, [])
    return (
        <Link to={`/chat/${conversation?._id}`} className='flex items-center gap-3 hover:bg-[#e6ebf5] p-4 rounded transition cursor-pointer '>
            <div>
                <img src="/image/testimonials1.jpg" width={40} height={30} alt="Messanger chat"
                    className='rounded-full object-cover' />
            </div>

            <div className='flex justify-between w-full'>
                <div className=''>
                    <h2>{getUser?.userName}</h2>
                    <p className='text-[14px] text-gray-400'>Okay Sure ❤️😂</p>
                </div>

                <div className=''>
                    <span className='text-[11px] text-gray-400'>02:50</span>

                </div>
            </div>

        </Link>
    )
}

export default ActiveChat