import React from 'react'
import Image from "next/image"


function ChatBox({ msg }: { msg: string }) {
    return (
        <div>
            <div className='w-40  h-[40px] my-3 rounded flex items-center justify'>
                <div className='float-right max-w-sm'>
                    <div className='bg-[#7269ef] p-3 rounded-md'>
                        <p className='text-white break-words'>{msg}</p>
                        <span className='text-[0.6rem] text-[#ffff]'>10:20</span>
                    </div>
                    <div className='flex items-center py-2 gap-2 text-gray-400'>
                        <div className='w-8 h-8 rounded-full'>
                            <Image src="/image/pjimage-49-7.jpg" width={40} height={40} alt="Messanger chat"
                                className='rounded-full'
                            />
                     
                        </div>
                        <p>Name </p>

                    </div>
                </div>
            </div>

            <div className=' float-right  '>
                <div className='float-right max-w-sm'>
                    <div className='bg-[#f7f7ff] p-3 rounded-md'>
                        <p className=' break-words'>{msg}</p>
                        <span className='text-[0.6rem] text-[#7a7f9a]'>10:20</span>
                    </div>
                    <div className='flex items-center py-2 gap-2 justify-end text-gray-400'>

                        <p>Name </p>
                        <div className='w-8 h-8 rounded-full'>
                            <Image src="/image/testimonials1.jpg" width={40} height={40} alt="Messanger chat"
                                className='rounded-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox