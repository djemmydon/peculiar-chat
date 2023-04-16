
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userAction } from '../redux/userSlice'


type conversationType = {
    members: [],
    _id: string
}

type userType = {
    _id: string,
    userName: string,

}
type ActiveChatType = {
    conversation: conversationType,
    user: string
    openBody: boolean,
    setOpenBody: (open: boolean) => void;

}
const endpoint: string = "http://localhost:9000/api/v1"

function ActiveChat({ conversation, user, openBody, setOpenBody }: ActiveChatType) {
    const [getUser, setGetuser] = useState<userType | null>()
    const dispatch = useDispatch()

    useEffect(() => {
        const friendId = conversation?.members?.find((c: string) => c !== user)

        const fetchType = async () => {
            await axios.get(`${endpoint}/user?userId=${friendId}`).then((res) => {
                setGetuser(res.data)

            })
        }
        fetchType()

    }, [])
    return (
        <div onClick={() => {
            dispatch(userAction.savedConversationId(conversation?._id))
            setOpenBody(!openBody)
        }} className='flex items-center gap-3 hover:bg-[#e6ebf5] py-2 px-4 rounded transition cursor-pointer '>
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

        </div>
    )
}

export default ActiveChat