import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HomeComp from '../components/HomeComp'

const endpoint: string = "http://localhost:9000/api/v1/message/"

interface messageType {
    "_id": string,
    "senderId": string,
    "conversationId": string,
    "message": string,
}
function Conversation({setOpenBody, openBody}: {setOpenBody:boolean}) {

    const { conversation } = useParams<string>()
 




    return (
        <div className='w-full'>
            <HomeComp setOpenBody={setOpenBody} openBody={openBody}  conversationIdd={conversation} />

        </div>
    )
}

export default Conversation