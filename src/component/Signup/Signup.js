import React, {useState} from "react";
import {Button, Stack, Typography, TextField} from "@mui/material";
import axios from "axios";
// import  from '@mui/material/TextField';


function Signup(){

    const [signupData, setSignupData] = useState({
        "email":"",
        "password":"",
        "phoneNumber":"",
        "name":"",
        "confirmPassword":"",
        "gender":"",
        "bio":""
    })

    function handleInput(e){
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
        })
        .catch((error)=>{
            console.log("kuch to Signup me fat gaya")
            console.log(error)
        })
    } 

    return (
        <Typography variant="form">
            <Stack spacing={5}>
                <Typography variant="h5">Signup Page</Typography>
                <Typography>Please fill in this form to  create an account.</Typography>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="name">
                        Name :-
                    </Typography>
                    <TextField id="name" name="name" onChange={handleInput} autoComplete="off" size="small" label="name" variant="filled" type="text"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="number">
                        Number :-
                    </Typography>
                    <TextField id="phoneNumber" name="phoneNumber" onChange={handleInput} autoComplete="off" size="small" label="phoneNumber" variant="filled" type="text"  />
                </Stack>
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
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="password">
                        confirm Password :-
                    </Typography>
                    <TextField id="confirmPassword" name="confirmPassword" onChange={handleInput} autoComplete="off" size="small" label="confirmPassword" variant="filled" type="password" />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="gender">
                        gender :-
                    </Typography>
                    <TextField id="gender" name="gender" onChange={handleInput} autoComplete="off" size="small" label="gender" variant="filled" type="text" />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="bio">
                        bio :-
                    </Typography>
                    <TextField id="bio" name="bio" onChange={handleInput} autoComplete="off" size="small" label="bio" variant="filled" type="text" />
                </Stack> 
                <Stack display="block" direction="row" spacing={4}>
                    <Typography variant="submit" htmlFor="submit">
                        Submit :-
                    </Typography>
                    <Button variant="contained" type="submit" size="small"  onClick={submitSignupData} color="info">
                        Info
                    </Button>
                </Stack>           
            </Stack>
        </Typography>    
    )
}

export default Signup;