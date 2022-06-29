import React, {useContext, useState} from "react";
import {Button, Stack, Typography, TextField} from "@mui/material";
import axios from "axios";
import authContext from "../../context/authContext/authContext";
// import  from '@mui/material/TextField';


function Login(){

    const {handleLoginInput, submitLoginData} = useContext(authContext)
    

    return (
        <Typography variant="form">
            <Stack spacing={5}>
                <Typography variant="h5">Login Page</Typography>
                <Typography>Please fill in this form to  login an account.</Typography>
                
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="email">
                        Email :-
                    </Typography>
                    <TextField id="email" name="email" onChange={handleLoginInput} autoComplete="off" size="small" label="email" variant="filled" type="email"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="password">
                        Password :-
                    </Typography>
                    <TextField id="password" name="password" onChange={handleLoginInput} autoComplete="off" size="small" label="password" variant="filled" type="password" />
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