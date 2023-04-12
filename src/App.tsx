import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import styled from 'styled-components'

import './App.css'
import RightBar from './components/RightBar'
import SideBar from './components/SideBar'
import AddFriendPage from './pages/AddFriend'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Conversation from './pages/Conversation'
import { RootState } from './type'


function App() {
  const location = useLocation()
  const [openBody, setOpenBody] = useState<boolean>(true)
  const users = useSelector((state: RootState) => state.user.userInfo)
  const navigate = useNavigate()

  useEffect(() => {
    if (!users.token) {
      navigate("/login")
    }
  }, [users])
  return (
    <Body>
      {location.pathname === "/login" || location.pathname === "/register" ? null : (
        <SideBar openBody={openBody} setOpenBody={setOpenBody} />
      )}

      <div className={openBody ? "bodyPage active" : "bodyPage"}>
        <Routes>
          <Route path='/' element={<AddFriendPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/chat/:conversation' element={<Conversation openBody={openBody} setOpenBody={setOpenBody}  />} />


        </Routes>
      </div>


      {/* <RightBar /> */}

    </Body>
  )
}

export default App


const Body = styled.div`
  display: flex;
  
  .bodyPage{
    background-color:white;
    width:100%;
    transition:0.5s;

    @media screen and (max-width: 800px) {
      position: absolute;
      top: 0;
      left:-100%;


    }
  }

  .bodyPage.active{
    left: 0
  }

`