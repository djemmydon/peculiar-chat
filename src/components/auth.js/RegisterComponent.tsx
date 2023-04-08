
import { Link } from 'react-router-dom'
import React from 'react'
import { ClipLoader } from 'react-spinners';
import { useForm } from './useForm';
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from '../../type'



function RegisterComponent() {

  const users = useSelector((state: RootState) => state.user.userInfo)


  const { handleChange, handleRegister, loading } = useForm()

  useEffect(() => {


  }, [users])

  return (
    <div className='h-screen bg-gray-200 flex items-center justify-center w-full '>

      <div className='hidden md:block  w-500 h-full'>
        <img src="/image/maxresdefault.jpg" width={2000} height={2000} alt="Messanger chat"
          className=' object-cover h-full' />
      </div>

      <div className='flex flex-col justify-center content-center w-full  '>
        <div className=' m-auto'>
          <img src="/img/icc.png" width={140} height={50} alt="Messanger chat"
            className='rounded-full object-cover' />
        </div>

        <div className='text-center py-5'>
          <h2 className=' text-2xl font-extrabold py-3'>Sign in</h2>
          <p className=' text-sm text-gray-500 font-extrabold '>Get your PeculiarChat account now</p>
        </div>

        <div className='sm:w-full   md:w-[500px] mx-auto h-full bg-white  px-0 md:px-10 py-10 rounded'>
          <form action="" className='flex flex-col items-center'>


            <div className='flex flex-col p-3'>
              <label htmlFor="Email">Email</label>
              <input className='w-[300px] md:full h-10 rounded border-2 outline-none px-2 text-sm' type="text" placeholder='Enter Email'
                name='email'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col p-3'>
              <label htmlFor="password">UserName</label>
              <input className='w-[300px] md:full h-10 rounded border-2 outline-none px-2 text-sm' type="text" placeholder='Enter UserName'
                name='userName'
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col p-3'>
              <label htmlFor="password">Password</label>
              <input className='w-[300px] md:full h-10 rounded border-2 outline-none px-2 text-sm' type="text" placeholder='Enter Password'
                name='password'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col p-3' >
              <button disabled={loading} onClick={handleRegister} className={loading ? 'w-[300px] md:full  h-10 bg-[#a7a1ff] text-white rounded' : 'w-[300px] md:full  h-10 bg-[#7269ef] text-white rounded hover:text-[#7269ef] hover:bg-white hover:border transition-all'}>{loading ? <ClipLoader size={20} color="#fff" className='' /> : "Sign Up"}</button>
            </div>

          </form>
        </div>

        <div className='text-center py-5'>
          <h2 className=' text-sm font-extrabold py-3'>Already have an account ? <Link to="/login" className='text-[#7269ef]'>Sign in</Link></h2>
          <p className=' text-sm text-gray-500 font-extrabold '>© 2023 Chatvia. Crafted with ❤️ by Peculiar</p>
        </div>
      </div>



    </div>
  )
}

export default RegisterComponent