import React, { useEffect, useState } from 'react'
import ActiveUser from "./ActiveUser"
import ActiveChat from "./ActiveChat"
import { useSelector } from 'react-redux'
import { ActiveChatType, RootState } from '../type'
import axios from 'axios'
import styled from 'styled-components'
import { BsChatDots, BsCodeSlash, BsFillChatDotsFill } from 'react-icons/bs'
import About from './About'
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import { MoonLoader } from 'react-spinners'




const endpoint: string = import.meta.env.VITE_APP_ENDPOINT

type conversationType = {
  members: [],
  _id: string
}

function SideBar({ openBody, setOpenBody }: ActiveChatType) {
  const [conversation, setConversation] = useState<conversationType[]>([])
  const users = useSelector((state: RootState) => state.user.userInfo)
  const [open, setOpen] = useState<number>(0)

  useEffect(() => {

    const fetchConversation = async () => {

      await axios.get(`${endpoint}/conversation/${users.user._id}`).then((res) => {
        if (res.status === 200) {
          setConversation(res.data)
        } else {
          console.log("Error is here")
        }
      })
    }

    fetchConversation()
  }, [users?.user?._id])


  return (
    <Body >
      {/* Head */}
      {open === 0 && <div className='main'>
        <div className='px-10 py-4'>
          <h2 className='text-[1.2rem] font-bold'>Chats</h2>
        </div>

        {/* Search */}
        <div className='flex items-center justify-center px-7'>
          <input className='w-full h-10 px-4 rounded-md bg-gray-200 text-sm outline-none border-none' type="text" placeholder='Search messages or Users' />
        </div>


        {/* Active */}

        <div className='overflow-x-scroll flex gap-3 my-5 mx-2 h-[100px] scrollbar-hide '>

          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
          <ActiveUser />
        </div>

        {/* Chat */}
        <div className='px-5 py-2'>
          <h2 className='text-[1rem] font-bold'>Chats</h2>
        </div>


        <div className='flex flex-col mx-2 gap-7 overflow-y-scroll h-[50%] scrollbar-hide'>

          {conversation.length === 0 && (

            <div className='mx-auto mt-10'>
            <MoonLoader size={30} color="#7269ef" />

            </div>
          )}
          {conversation.map((item) => (
            <ActiveChat openBody={openBody} setOpenBody={setOpenBody} conversation={item} key={item._id} user={users.user._id} />
          ))}

        </div>


      </div>}

      {open === 1 && (
        <div className='main'>

          <About users={users.user} />
        </div>
      )}


      <div className='mini'>
        <div className="mini_flex">
          <div className="item" onClick={() => setOpen(0)}>
            <BsChatDots />
          </div>
          <div className="item" onClick={() => setOpen(1)}>

          </div>
          <div className="item" onClick={() => setOpen(1)}>
            <AiOutlineUserAdd />
          </div>

        </div>


        <div className="item item_bottom ">
          <AiOutlineUser />
        </div>


      </div>
    </Body>
  )
}

export default SideBar


const Body = styled.div`
  height: 100vh;
  /* width: 300px; */
  border-width: 1px;
 background-color:#f7f7ff;
 display:flex;
 flex-direction: row-reverse;


 @media screen and (max-width:800px) {
  width:100%;
  position: absolute;
  justify-content:space-between;
 flex-direction:column;

 }

 .main{
  width:350px;
  position:relative;
  @media screen and (max-width:800px) {
  width:100%;

 }
  
 }
.mini{
  width:70px;
 background:#ffff;
 @media screen and (max-width:800px) {
  width:100%;


 }
 .mini_flex{
  margin-top:5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1.5rem;
   
    @media screen and (max-width:800px) {
      flex-direction:row;
      margin:1rem;
      justify-content:space-evenly;



 }
    .item{

      svg{
      font-size:1.5rem;
      cursor:pointer;
      color:#7269ef;

      }
    };

  

  }

  .item_bottom{
      position:absolute;
      bottom: 5rem;
    
    }
}
`