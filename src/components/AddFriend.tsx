import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate,  } from "react-router-dom"
import styled from "styled-components"
import { RootState } from "../type"

interface messageType {
    _id: string,
    senderId: string,
    conversationId: string
    message: string,
    createdAt: string,
    userName: string,
    email:string

}

const AddFriend = () => {
    const users = useSelector((state: RootState) => state.user.userInfo)
    const [user, setUser] = useState<messageType[]>([])
    const navigate = useNavigate()
   

    useEffect(() => {
        const FetchData = async () => {
            await axios.get("http://localhost:9000/api/v1/user/all").then((res) => {
               
                setUser(res.data)
            })
        }
        FetchData()
    }, [])


    // const handleStart =

    return (
        <Body className="w-full">
            <div className="header">
                <h2>Welcome {users.user.userName}</h2>
            </div>


            <div className="friend">
                <h2>
                    Suggestion People
                </h2>


                <div className="flex_user">
                    {user.filter((c) => c._id !== users.user._id).map((item) => (
                        <div key={item._id} className="item-body">
                            <div className="image_text">
                                <div className="img">
                                    <img src="/image/default.jpg" alt="" />
                                </div>

                                <div className="text">
                                    <h2>{item.userName}</h2>
                                    <p>{item.email}</p>
                                    <p>Front-end developer, Content, UI/UX,Graphics designer</p>
                                </div>

                            </div>

                            <div className="button">
                                <button onClick={async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                    event.preventDefault()
                                    await axios.post("http://localhost:9000/api/v1/conversation", {
                                        receiverId:item._id,
                                        senderId: users.user._id,
                                      
                                    }).then((res) => {
                                        try {
                                            navigate(`/chat/${res.data._id}`)
                                           
                                        } catch (err) {
                                           
                                        }
                                    })
                                }
                                }>Start Conversation</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Body>
    )
}

export default AddFriend



const Body = styled.div`

.flex_user{
    display: flex;
    justify-content:space-between;
    flex-direction:column;
    gap:2rem;
    margin:2rem 1rem;
.item-body{
    display: flex;
    justify-content:space-between;
    align-items:center;

}
    .image_text{
        display:flex;
        .img{
            width:70px;
        img{
            width:100%;
            border-radius:10px;
        }
        }

        .text{
            display:flex;
            flex-direction:column;
            padding:0 5px;
            gap:0.3rem;
            h2{
                font-size:0.7rem;
                
            }
            p{
                font-size:0.6rem;
                color: gray;
            }
        }
    }

    .button{
        button{
            font-size:0.7rem;
            background:#7269ef;
            padding:10px 15px;
            border-radius:10px;
            color:#fff;
            transition:0.1s ease-in;
            border:1px solid #7269ef;


            :hover{
                color:#7269ef;
                background:#fff;
                border:1px solid #7269ef;
            }

        }
    }
}
`