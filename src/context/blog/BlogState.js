import React, {useState, useEffect} from "react";
import blogContext from "./BlogContext";

import axios from "axios";

const BlogState = (props)=>{

    const getBlogsData= async()=>{
        const resp = await axios.get("http://localhost:8000/blog")
        const data = resp.data
        setBlogs(data.data)
    }

    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        getBlogsData()
    },[])

    

    const values = {
        blogs
    }


    return (
        <blogContext.Provider value={values}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;