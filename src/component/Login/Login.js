import React, {useState} from "react";
import {Button, Stack, Typography, TextField} from "@mui/material";
import axios from "axios";
// import  from '@mui/material/TextField';


function Login(){

    const [loginData, setLoginData] = useState({
        "email":"",
        "password":"",
    })

    function handleInput(e){
        const name = e.target.name
        // console.log(name)
        const value = e.target.value
        // console.log(value)
        setLoginData({...loginData, [name]:value})
    }

    function submitLoginData(){
        console.log(loginData,loginData.email,loginData.email)
        axios.get('http://localhost:8000/auth/login/',loginData
        // {
        //     email:loginData.email,
        //     password:loginData.password,
        // }
        )
        .then((response)=>{
            console.log("successfully signedup",response)
        })
        .catch((error)=>{
            console.log("kuch to Login me fat gaya")
            console.log(error)
        })
    } 

    return (
        <Typography variant="form">
            <Stack spacing={5}>
                <Typography variant="h5">Login Page</Typography>
                <Typography>Please fill in this form to  login an account.</Typography>
                
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="email">
                        Email :-
                    </Typography>
                    <TextField id="email" name="email" onChange={handleInput} autoComplete="off" size="small" label="email" variant="filled" type="email"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="password">
                        Password :-
                    </Typography>
                    <TextField id="password" name="password" onChange={handleInput} autoComplete="off" size="small" label="password" variant="filled" type="password" />
                </Stack> 
                 
                <Stack display="block" direction="row" spacing={4}>
                    <Typography variant="submit" htmlFor="submit">
                        Submit :-
                    </Typography>
                    <Button variant="contained" type="submit" size="small"  onClick={submitLoginData} color="info">
                        Info
                    </Button>
                </Stack>           
            </Stack>
        </Typography>    
    )
}

export default Login;