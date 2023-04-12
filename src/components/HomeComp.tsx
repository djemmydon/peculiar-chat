"use client"

import React, { useEffect, useState, useRef } from 'react'
import { VscSmiley } from "react-icons/vsc"
import { FaImage } from "react-icons/fa"
import { AiOutlineSend } from "react-icons/ai"
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
// import { io } from "socket.io-client"

import ChatBox from "./ChatBox"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../type'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Pusher from "pusher-js"
interface messageType {
    _id: string,
    senderId: string,
    conversationId: string
    message: string,
    createdAt: string,
    userName: string

}

interface allType {
    message: messageType[],
    conversationIdd: string,
    openBody: boolean,
    setOpenBody: (open: boolean) => void;

}


const endpoint: string = "http://localhost:9000/api/v1/message/"

const HomeComp: React.FC<allType> = ({ conversationIdd, setOpenBody, openBody }) => {
    const users = useSelector((state: RootState) => state.user.userInfo)


    const [msg, setMsg] = useState<string>("")
    const [message, setMessage] = useState<messageType[]>([])
    const [openEmoji, setOpenEmoji] = useState<boolean>(false)
    const [allUser, setAllUser] = useState<[]>([])
    const scroll = useRef()

    function onClick(emojiData: EmojiClickData, event: MouseEvent) {
        setMsg(msg + (emojiData.emoji));
    }

    useEffect(() => {
        const fetchMessage = async () => {
            await axios.get("http://localhost:9000/api/v1/user/all").then((res) => {
                try {
                    const all = res.data.map((item: any) => item)
                    setAllUser(all)
                } catch (error) {
                    console.error(error)
                }
            })

        }

        fetchMessage()
    }, [])




    // Fetch All Messages 




    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])


    useEffect(() => {
        const fetchMessage = async () => {
            await axios.get(endpoint + conversationIdd).then((res) => {
                try {
                    setMessage(res.data)
                    console.log(message)

                } catch (error) {
                    console.error(error)
                }
            })

        }


        fetchMessage()
    }, [])





    // Create New Messagesg

    const OnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }
    const sendMessage = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        const userId = users.user._id
        const data = { conversationId: conversationIdd, message: msg, senderId: userId }


        await axios.post(endpoint, data).then((res) => {
            try {
              


                setMsg('')
            } catch (err) {

            }
        })
    }


    // Connecting to Socket.io
    // useEffect(() => {
    //     socket.current.emit("addUser", users.user._id)
    //     socket.current.on("getUsers", user => {
    //         console.log(user)
    //     })
    // }, [users])


    return (
        <div className='relative h-full w-full overflow-y-hidden '>
            {/* Header */}

            <div className='w-full h-16 border-b-2 '>

                <div className='flex items-center gap-3 h-full pl-6'>
                    <div onClick={() => setOpenBody(!openBody)}>
                        <BsArrowLeftCircleFill className='text-[#7269ef] ' size={30} />
                    </div>
                    <img src="/image/pjimage-49-7.jpg" alt="Messanger chat"
                        className='rounded-full w-[30px] '
                    />

                    <div className='flex items-center gap-1'>
                        <h2 className='text-sm font-semibold'>Patrick Hedrick</h2>
                        <div className='w-2 h-2  rounded-full bg-green-600 border-white border '></div>

                    </div>
                </div>

            </div>

            {/* Chat Box */}
            <div className=" h-[70vh] flex flex-col pt-10 mt-6 px-10 overflow-y-scroll scrollbar-hide ">
                {message?.map(item => (
                    <div ref={scroll}>


                        <ChatBox msg={item} key={item._id} />
                    </div>
                ))}



            </div>


            {/* Chstinput */}
            <div>
                <form action="" className="h-full w-full   top-[50rem] flex items-center border-t-2">
                    <div className="  py-10 w-full flex  items-end justify-center gap-1  px-10 ">
                        <input onChangeCapture={OnchangeHandler} value={msg} className="w-full h-10 border-2 bg-[#e6ebf5]  outline-none rounded px-4" type="text" placeholder="Type message here" onChange={(e) => setMsg(e.target.value)} />

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
                        <button onClick={sendMessage} className="h-10 w-14 bg-[#7269ef] text-white rounded flex items-center justify-center "><AiOutlineSend /></button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default HomeComp