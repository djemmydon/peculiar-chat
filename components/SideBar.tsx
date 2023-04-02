import Image from 'next/image'
import React from 'react'
import ActiveUser from "./ActiveUser"
import ActiveChat from "./ActiveChat"

function SideBar() {
  return (
    <div className='h-full'>
      {/* Head */}

      <div className='px-10 py-4'>
        <h2 className='text-[1.2rem] font-bold'>Chats</h2>
      </div>

      {/* Search */}
      <div className='flex items-center justify-center px-7'>
        <input className='w-full h-10 px-4 rounded-md bg-gray-200 text-sm outline-none border-none' type="text" placeholder='Search messages or Users' />
      </div>


      {/* Active */}

      <div className='overflow-x-scroll flex gap-3 my-5 mx-3 h-[100px] scrollbar-hide '>

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
      <div className='px-10 py-4'>
        <h2 className='text-[1rem] font-bold'>Chats</h2>
      </div>


      <div className='flex flex-col mx-6 gap-7 overflow-y-scroll h-[500px] scrollbar-hide'>
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
       <ActiveChat />
      </div>


    </div>
  )
}

export default SideBar