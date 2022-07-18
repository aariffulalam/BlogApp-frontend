import React, {useState,useContext, useEffect} from "react";
import blogContext from "./BlogContext";
import authContext from "../authContext/authContext";
import {useNavigate} from 'react-router-dom'

import axios from "axios";

const BlogState = (props)=>{

    const {loginData} = useContext(authContext)

    const navigate = useNavigate();

    const {getFromLocal} = useContext(authContext);
    const token = getFromLocal()

    const [blogs, setBlogs]= useState([])

    const getBlogsData= async()=>{
        const resp = await axios.get("http://localhost:8000/blog")
        const data = resp.data
        setBlogs(data.data)
    }

    useEffect(()=>{
        getBlogsData()
    },[])


    const [blogState, setBlogState] = useState({
        title : "",
        blog : "",
        image : []
    })


    function handleBlogData(e){
        const name = e.target.name
        const value = e.target.value
        setBlogState({...blogState, [name]: value})
    }

    function handleBlogImage(e){
        const file = e.target.files[0]
        const name = e.target.name
        setBlogState({...blogState,[name]:file})
        // console.log(event)
    }

    async function submitBlogData(){
        const url = "http://localhost:8000/blog/create"
        await axios.post(url, blogState , {
            headers:{
                "Content-type" : "multipart/form-data",
                "authorization" : "bearer " + token
            }
        })
        console.log(blogState)
        navigate('/')
        getBlogsData()

    }

    async function deleteBlog(id){
        const url = `http://localhost:8000/blog/${id}`;
        await axios.delete(url,{
            headers:{
                "Content-type" : "application/json",
                "authorization" : "bearer " + token
            }
        })
        // navigate('/')
        // getBlogsData()
    }

    const values = {
        blogs,
        handleBlogData,
        handleBlogImage,
        submitBlogData,
        deleteBlog
    }

    return (
        <blogContext.Provider value={values}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;