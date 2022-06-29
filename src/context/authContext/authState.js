import React from "react";
import authContext from "./authContext"
import axios from "axios";
import  {useState} from "react";

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
        })
        .catch((error)=>{
            console.log("kuch to Signup me fat gaya")
            console.log(error)
            alert(error.response.data.error)
        })
    } 

    const [loginData, setLoginData] = useState({
        "email":"",
        "password":"",
    })

    function handleLoginInput(e){
        const name = e.target.name
        // console.log(name)
        const value = e.target.value
        // console.log(value)
        setLoginData({...loginData, [name]:value})
    }

    function submitLoginData(){
        console.log(loginData, loginData.email, loginData.password)
        axios.post('http://localhost:8000/auth/login/',//loginData
        {
            email:loginData.email,
            password:loginData.password,
        }
        )
        .then((response)=>{
            console.log("successfully Logedin",response)
            alert("successfully User logedin")
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
        submitLoginData,
        handleLoginInput
    }
    return (
        <authContext.Provider value={values}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
