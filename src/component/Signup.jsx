import React, {useContext} from "react";
import {Button, Stack, Typography, TextField} from "@mui/material";
import authContext from "../context/authContext/authContext";
import {useNavigate} from 'react-router-dom'

import "./CommonStyle.css"

function Signup(){
    const navigate = useNavigate();

    const {handleSignupInput, submitSignupData} = useContext(authContext)

    return (
        <Typography variant="form" className="centerDiv auth">
            <Stack spacing={5}>
                <Typography variant="h5">Signup Page</Typography>
                <Typography>Please fill in this form to  create an account.</Typography>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="name">
                        Name :-
                    </Typography>
                    <TextField id="name" name="name" onChange={handleSignupInput} autoComplete="off" size="small" label="name" variant="filled" type="text"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="number">
                        Number :-
                    </Typography>
                    <TextField id="phoneNumber" name="phoneNumber" onChange={handleSignupInput} autoComplete="off" size="small" label="phoneNumber" variant="filled" type="text"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="email">
                        Email :-
                    </Typography>
                    <TextField id="email" name="email" onChange={handleSignupInput} autoComplete="off" size="small" label="email" variant="filled" type="email"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="password">
                        Password :-
                    </Typography>
                    <TextField id="password" name="password" onChange={handleSignupInput} autoComplete="off" size="small" label="password" variant="filled" type="password" />
                </Stack> 
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="password">
                        confirm Password :-
                    </Typography>
                    <TextField id="confirmPassword" name="confirmPassword" onChange={handleSignupInput} autoComplete="off" size="small" label="confirmPassword" variant="filled" type="password" />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="gender">
                        gender :-
                    </Typography>
                    <TextField id="gender" name="gender" onChange={handleSignupInput} autoComplete="off" size="small" label="gender" variant="filled" type="text" />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="bio">
                        bio :-
                    </Typography>
                    <TextField id="bio" name="bio" onChange={handleSignupInput} autoComplete="off" size="small" label="bio" variant="filled" type="text" />
                </Stack> 
                <Stack display="block" direction="row" spacing={4}>
                    <Typography variant="submit" htmlFor="submit">
                        Submit :-
                    </Typography>
                    <Button variant="contained" type="submit" size="small"  onClick={submitSignupData} color="info">
                        Info
                    </Button>
                </Stack>
                <Stack display="block" direction="row" spacing={4}>
                    <button onClick={()=>navigate('/login')}>Exiting Account</button>
                </Stack>          
            </Stack>
        </Typography>    
    )
}

export default Signup;