import React from 'react'

interface messageType {
    _id: string,
    senderId: string,
    conversationId: string
    message: string,
    createdAt: string,
    userName: string,
    email:string

}
function About({users}: {users:messageType}) {
    return (
        <div className='p-2 '>  
            <div className='title my-3'>
                <h2 className='text-[1.3rem]'>My Profile</h2>
            </div>

            <div className="header m-auto flex flex-col items-center my-5 ">
                <div>
                <img className='h-16 rounded-full' src="/image/testimonials1.jpg" alt="" />

                </div>

                <h1>{users.userName}</h1>

                <div className='flex items-center gap-1'>
                    <h2 className='text-sm font-semibold'>Active</h2>
                    <div className='w-2 h-2 rounded-full bg-green-600 border-white border '></div>

                </div>
            </div>

            <div className="about">
                <p className='text-[12px] text-gray-500'>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
            </div>
        </div>
    )
}

export default About


