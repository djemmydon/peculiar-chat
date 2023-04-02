import Image from 'next/image'
import React from 'react'

function ActiveChat() {
    return (
        <div className='flex items-center gap-3 hover:bg-[#e6ebf5] p-4 rounded transition cursor-pointer '>
            <div>
                <Image src="/image/testimonials1.jpg" width={40} height={30} alt="Messanger chat"
                    className='rounded-full object-cover' />
            </div>

            <div className='flex justify-between w-full'>
                <div className=''>
                    <h2>Patrick Hedrick</h2>
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