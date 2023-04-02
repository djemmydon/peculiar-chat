import Image from 'next/image'
import React from 'react'
import { useState } from "react"
import { VscSmiley } from "react-icons/vsc"
import { FaImage } from "react-icons/fa"
import { AiOutlineSend } from "react-icons/ai"
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

import ChatBox from "./ChatBox"


function HomeComp() {
    const [msg, setMsg] = useState("This is my first...")
    const [openEmoji, setOpenEmoji] = useState<boolean>(false)

    function onClick(emojiData: EmojiClickData, event: MouseEvent) {
        setMsg(msg + (emojiData.emoji));
    }

    return (
        <div className='relative h-full '>
            {/* Header */}

            <div className='w-full h-16 border-b-2 '>
                <div className='flex items-center gap-3 h-full pl-6'>
                    <Image src="/image/pjimage-49-7.jpg" width={30} height={40} alt="Messanger chat"
                        className='rounded-full'
                    />

                    <div className='flex items-center gap-1'>
                        <h2 className='text-sm font-semibold'>Patrick Hedrick</h2>
                        <div className='w-2 h-2 rounded-full bg-green-600 border-white border '></div>

                    </div>
                </div>

            </div>

            {/* Chat Box */}
            <div className=" h-[70vh] flex flex-col pt-10 mt-6 px-10 overflow-y-scroll scrollbar-hide ">
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />
                <ChatBox msg={msg} />


            </div>


            {/* Chstinput */}
            <div>
                 <form action="" className="h-full w-full   top-[50rem] flex items-center border-t-2">
                <div className="  py-10 w-full flex  items-end justify-center gap-1  px-10 ">
                    <input value={msg} className="w-full h-10 border-2 bg-[#e6ebf5]  outline-none rounded px-4" type="text" placeholder="Type message here" onChange={(e) => setMsg(e.target.value)} />

                    {openEmoji && (
                        <div className='absolute bottom-[7.4rem] right-10'>
                            <EmojiPicker
                                onEmojiClick={onClick}
                            />

                        </div>
                    )}

                    <div className='w-14 h-10 text-[#7269ef] flex items-center justify-center cursor-pointer'
                        onClick={() => setOpenEmoji(!openEmoji)}
                    >

                        <VscSmiley />

                    </div>
                    <div className='w-14 h-10 text-[#7269ef] flex items-center justify-center cursor-pointer'>

                        <FaImage />
                    </div>
                    <button className="h-10 w-14 bg-[#7269ef] text-white rounded flex items-center justify-center "><AiOutlineSend /></button>
                </div>
            </form> 
            </div>
          
        </div>
    )
}

export default HomeComp