import Image from 'next/image'
import React from 'react'

function ActiveUser() {
  return (
    <div className='bg-[#e6ebf5] w-[90px] px-2 h-[50px] rounded-md relative mt-5'>
    <Image src="/image/pjimage-49-7.jpg" width={30} height={30} alt="Messanger chat"
        className='rounded-full object-cover absolute right-7 -top-4' />
      <div className='w-2 h-2 rounded-full bg-green-600 border-white border absolute right-0'></div>
    <h2 className='py-6 text-[0.8rem] text-center'>Emmydon</h2>
  </div>
  )
}

export default ActiveUser