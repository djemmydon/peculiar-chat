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
import { allType, messageType, RootState } from '../type'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Pusher from "pusher-js"
import styled from 'styled-components'




const HomeComp: React.FC<allType> = ({ setOpenBody, openBody }) => {
    const users = useSelector((state: RootState) => state.user.userInfo)
    const conversationId = useSelector((state: RootState) => state.user.conversationId)
    const endpoint = import.meta.env.VITE_APP_ENDPOINT



    const [msg, setMsg] = useState<string>("")
    const [message, setMessage] = useState<messageType[]>([])
    const [openEmoji, setOpenEmoji] = useState<boolean>(false)
    const [allUser, setAllUser] = useState<[]>([])
    const scroll = useRef<null | HTMLDivElement>()

    function onClick(emojiData: EmojiClickData, event: MouseEvent) {
        setMsg(msg + (emojiData.emoji));
    }

    // useEffect(() => {
    //     const fetchMessage = async () => {
    //         await axios.get("http://localhost:9000/api/v1/").then((res) => {
    //             try {
    //                 const all = res.data.map((item: any) => item)
    //                 setAllUser(all)
    //             } catch (error) {
    //                 console.error(error)
    //             }
    //         })

    //     }

    //     fetchMessage()
    // }, [])




    // Fetch All Messages 


    useEffect(() => {

        const pusher = new Pusher("8eb4386a18c23cd290ee", {
            cluster: "mt1",
        });



        pusher.subscribe("")

    })



    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])


    useEffect(() => {
        const fetchMessage = async () => {
            await axios.get(`${endpoint}/message/${conversationId}`).then((res) => {
                try {
                    setMessage(res.data)
                    console.log(message)

                } catch (error) {
                    console.error(error)
                }
            })

        }


        fetchMessage()
    }, [conversationId])





    // Create New Messagesg

    const OnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }
    const sendMessage = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        const userId = users.user._id
        const data = { conversationId: conversationId, message: msg, senderId: userId }


        await axios.post(endpoint, data).then((res) => {
            try {


                setMessage([...message, res.data])

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
        <ChatSide className='relative h-full w-full overflow-y-hidden bg-gradient-to-tr  to-blue-500 from-gray-300 '>
            {/* Header */}

            <div className='w-full h-16 border-b-2 '>

                <div className='flex items-center gap-3 h-full pl-6 bg-white'>
                    <div onClick={() => setOpenBody(!openBody)}>
                        <BsArrowLeftCircleFill className='text-[#7269ef] ' size={30} />
                    </div>


                    <div className='flex items-center gap-1 '>

                    </div>
                </div>

            </div>

            {/* Chat Box */}

            {!conversationId ? (<div className='h-[80vh] w-full flex items-center justify-center  '>
                <div className=' m-auto '>
                    <h2 className='text-6xl'>Start A Chat😊</h2>

                </div>
            </div>) :

                (<div className=" h-[80vh] flex flex-col  mt-6 px-10 overflow-y-scroll scrollbar-hide ">
                    {message?.map(item => (
                        <div ref={scroll}>


                            <ChatBox msg={item} key={item._id} />
                        </div>
                    ))}



                </div>)
            }



            {/* Chstinput */}
            <div className='bg-white'>
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

        </ChatSide>
    )
}

export default HomeComp





const ChatSide = styled.div`
    /* background-image: url("/image/backg.jpg") */

`