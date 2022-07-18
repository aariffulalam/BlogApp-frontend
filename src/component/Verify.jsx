import React, {useContext} from "react";
import {Button, Stack, Typography, TextField} from "@mui/material";
import authContext from "../context/authContext/authContext";


function Varify(){

    const {handleVerifyInput, submitVerifyData} = useContext(authContext)

    return (
        <Typography variant="form" className="centerDiv auth">
            <Stack spacing={5}>
                <Typography variant="h5">Verify your account</Typography>
                <Typography>Please fill in this form to  login an account.</Typography>
                
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="email">
                        Email :-
                    </Typography>
                    <TextField id="email" name="email" onChange={handleVerifyInput} autoComplete="off" size="small" label="email" variant="filled" type="email"  />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <Typography variant="label" htmlFor="otp">
                        otp :-
                    </Typography>
                    <TextField id="otp" name="otp" onChange={handleVerifyInput}  autoComplete="off" size="small" label="otp" variant="filled" type="otp" />
                </Stack> 
                <Stack display="block" direction="row" spacing={4}>
                    <Typography variant="submit" htmlFor="submit">
                        Submit :-
                    </Typography>
                    <Button variant="contained" onClick={submitVerifyData} type="submit" size="small"  color="info">
                        Info
                    </Button>
                </Stack> 
            </Stack>
        </Typography>    
    )
}

export default Varify;