import React from "react";
import authContext from "./authContext"
import axios from "axios";
import  {useState} from "react";
import {useNavigate } from "react-router-dom"

const AuthState = (props)=>{
    const [signupData, setSignupData] = useState({
        "email":"",
        "password":"",
        "phoneNumber":"",
        "name":"",
        "confirmPassword":"",
        "gender":"",
        "bio":""
    })

    const [verifyData, setVerifyData] = useState({
        "email" : "",
        "otp" : ""
    })

    const [loginData, setLoginData] = useState({
        "email":"",
        "password":"",
    })

    const navigate = useNavigate()

    const setToLocal = (token)=>{
        localStorage.setItem("authToken", token)
    }

    const getFromLocal = ()=>{
        return localStorage.getItem("authToken")

    }


    function handleSignupInput(e){
        const name = e.target.name
        // console.log(name)
        const value = e.target.value
        // console.log(value)
        setSignupData({...signupData, [name]:value})
    }

    function submitSignupData(){
        console.log(signupData)
        axios.post('http://localhost:8000/auth/signup/',{
            name:signupData.name,
            phoneNumber:signupData.phoneNumber,
            email:signupData.email,
            password:signupData.password,
            confirmPassword:signupData.confirmPassword,
            gender:signupData.gender,
            bio:signupData.bio,
            dateOfBirth : "1970-01-01T00:00:00.000Z"

        })
        .then((response)=>{
            console.log("successfully signedup",response)
            alert("successfully User signedup")
            navigate("/verify")
        })
        .catch((error)=>{
            console.log("kuch to Signup me fat gaya")
            console.log(error)
            alert(error.response.data.error)
        })
    } 


    function handleVerifyInput(e){
        console.log("verify is working.")
        const name = e.target.name
        const value = e.target.value
        setVerifyData({...verifyData, [name]:value})
    }

    function submitVerifyData(){
        axios.post("http://localhost:8000/auth/verify",verifyData)
        .then((res)=>{
            alert("verified")
            navigate("/login")
        })
        .catch((error)=>{
           console.log("verified nahi hua")
           console.log(error)
           alert(error) 
        })
    }
    

    function handleLoginInput(e){
        const name = e.target.name
        // console.log(name)
        const value = e.target.value
        // console.log(value)
        setLoginData({...loginData, [name]:value})
    }

    function submitLoginData(){
        // console.log(loginData, loginData.email,  loginData.password)
        axios.post('http://localhost:8000/auth/login/',//loginData
        {
            email:loginData.email,
            password:loginData.password,
        })
        .then((response)=>{
            const resp = response.data.token
            console.log(resp)
            setToLocal(resp)
            alert("successfully User logedin")
            navigate("/")
        })
        .catch((error)=>{
            console.log("kuch to Login me fat gaya")
            console.log(error)
            alert(error.response.data.error)
        })
    }


    const values = {
        handleSignupInput,
        submitSignupData,
        handleVerifyInput,
        submitVerifyData,
        handleLoginInput,
        submitLoginData,
        getFromLocal,
        loginData
    }
    return (
        <authContext.Provider value={values}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
