import React from 'react'
import { useSelector } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { RootState } from '../type'
interface messageType {
    "_id": string,
    "senderId": string,
    "conversationId": string,
    "message": string,
    "userName": string,
    "createdAt": string
}

function ChatBox({ msg }: { msg: messageType }) {
    const users = useSelector((state: RootState) => state.user.userInfo)

    const compare = msg.senderId === users.user._id
    console.log(compare)

    return (
        <div>
            {!compare && <div className='w-[400px]  h-[40px] mt-10 rounded flex'>
                <div className='float-right max-w-sm'>
                    <div className='bg-[#7269ef] p-3 rounded-md'>
                        <p className='text-white break-words'>{msg.message}</p>
                        <span className='text-[0.6rem] text-[#ffff]'>
                            <ReactTimeAgo date={msg.createdAt} locale="en-US" />

                        </span>
                    </div>
                    <div className='flex items-center py-2 gap-2 text-gray-400'>
                        <div className='w-8 h-8 rounded-full'>
                            <img src="/image/pjimage-49-7.jpg" width={40} height={40} alt="Messanger chat"
                                className='rounded-full'
                            />

                        </div>
                        <p>{msg.userName} </p>

                    </div>
                </div>
            </div>}
            {compare && <div className=' float-right  '>
                <div className='float-right max-w-sm'>
                    <div className='bg-[#f7f7ff] p-3 rounded-md'>
                        <p className=' break-words'>{msg.message}</p>
                        <span className='text-[0.6rem] text-[#7a7f9a]'>
                            <ReactTimeAgo date={msg.createdAt} locale="en-US" />

                        </span>
                    </div>
                    <div className='flex items-center py-2 gap-2 justify-end text-gray-400'>

                        <p>{msg.userName} </p>
                        <div className='w-8 h-8 rounded-full'>
                            <img src="/image/testimonials1.jpg" width={40} height={40} alt="Messanger chat"
                                className='rounded-full'
                            />
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default ChatBox