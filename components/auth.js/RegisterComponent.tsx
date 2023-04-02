

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RegisterComponent() {
  return (
    <div className='h-screen bg-gray-200 flex items-center justify-center w-full '>

      <div className='w-500 h-full'>
        <Image src="/image/maxresdefault.jpg" width={2000} height={2000} quality={100} alt="Messanger chat"
          className=' object-cover h-full' />
      </div>

      <div className='flex flex-col justify-center content-center w-full  '>
        <div className=' m-auto'>
          <Image src="/image/icc.png" width={140} height={50} alt="Messanger chat"
            className='rounded-full object-cover' />
        </div>

        <div className='text-center py-5'>
          <h2 className=' text-2xl font-extrabold py-3'>Sign in</h2>
          <p className=' text-sm text-gray-500 font-extrabold '>Get your PeculiarChat account now</p>
        </div>

        <div className='w-[500px] mx-auto h-full bg-white px-10 py-10'>
          <form action="">


            <div className='flex flex-col p-3'>
              <label htmlFor="Email">Email</label>
              <input className='w-full h-10 rounded border-2 outline-none px-2 text-sm' type="text" placeholder='Enter Email' />
            </div>
            <div className='flex flex-col p-3'>
              <label htmlFor="password">Password</label>
              <input className='w-full h-10 rounded border-2 outline-none px-2 text-sm' type="text" placeholder='Enter Password' />
            </div>
            <div className='flex flex-col p-3'>
              <button className='w-full h-10 bg-[#7269ef] text-white rounded hover:text-[#7269ef] hover:bg-white hover:border transition-all'>Sign Up</button>
            </div>
          </form>
        </div>

        <div className='text-center py-5'>
          <h2 className=' text-sm font-extrabold py-3'>Already have an account ? <Link href="/login" className='text-[#7269ef]'>Sign in</Link></h2>
          <p className=' text-sm text-gray-500 font-extrabold '>© 2023 Chatvia. Crafted with ❤️ by Peculiar</p>
        </div>
      </div>



    </div>
  )
}

export default RegisterComponent