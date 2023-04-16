import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HomeComp from '../components/HomeComp'
import { ActiveChatType } from '../type'

const endpoint: string = `${import.meta.env.VITE_APP_ENDPOINT}/message`


function Conversation({ setOpenBody, openBody }: ActiveChatType) {






    return (
        <div className='w-full'>

            <HomeComp setOpenBody={setOpenBody} openBody={openBody} />

        </div>
    )
}

export default Conversation