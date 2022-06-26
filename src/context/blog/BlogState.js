import React, {useState, useEffect} from "react";
import blogContext from "./BlogContext";

import axios from "axios";

const BlogState = (props)=>{

    const getFakeData= async()=>{

        const resp = await axios.get("http://localhost:8000/blog")
        const data = resp.data
        // console.log(data)
        // console.log(data.data)
        setState(data.data)
    }
    
    // const data = resp.json()

    
    // const st = {
    //     "image" : "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-600w-1725825019.jpg"
    // }

    const [state, setState]= useState([])
    useEffect(()=>{
        getFakeData()
    },[])


    return (
        <blogContext.Provider value={state}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;