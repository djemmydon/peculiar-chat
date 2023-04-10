"use-client"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { userAction } from "../../redux/userSlice"


const endpoint: string = "http://localhost:9000/api/v1/auth/"

export const useForm = () => {

    const dispatch = useDispatch()
    const router = useNavigate()


    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState({
        password: "",
        userName: "",
        email: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })

    }



    const handleRegister = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setLoading(true)
        await axios.post(`${endpoint}/register`, data).then((res) => {
            try {
              
                dispatch(userAction.getUser(res.data));

                setLoading(false)
                router("/")


                toast("Your account has been created succefully");
            } catch (error) {

            }
        })

    }

    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setLoading(true)
        await axios.post(`${endpoint}/login`, data).then((res) => {
            try {
                setLoading(false)
                dispatch(userAction.getUser(res.data));

                router("/")
                toast("Login Succesfully");
            } catch (error) {

            }
        })

    }

    return { handleChange, handleRegister, loading, handleLogin }
}