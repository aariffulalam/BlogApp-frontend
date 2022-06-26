import React from "react";
import loginContext from "./LoginContext"

const loginState = (props)=>{

    const postLoginData = ()=>{
        console.log("i am loginState, thank god i am woring")
    }

    return (
        <loginContext.Provider value={{email:"sajjad21@navgurukul", password:"@Sajjad123"}}>
            {props.children}
        </loginContext.Provider>
    )
}
