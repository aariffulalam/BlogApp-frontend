import React, { useState } from 'react';

import { Typography, TextField, Stack, Button } from '@mui/material'
import axios from 'axios';


function AddBlog() {

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
        const url = "http://localhost:8000/blog/29"
        await axios.post(url, blogState , {
            headers:{
                "Content-type" : "multipart/form-data"
            }
        })


        console.log(blogState)
    }

    return (
        <Typography variant='form'>
            <Stack spacing={4}>
                <h1>add blog</h1>
                <Stack direction="row" spacing={4}>
                    <Typography
                        variant='label'
                        htmlFor="title"
                        style={{ width: "10%", backgroundColor: "yellow" }}
                    >
                        Title :-
                    </Typography>
                    <TextField
                        id="title"
                        name="title"
                        label="title"
                        onChange={handleBlogData}
                        variant="filled"
                        style={{ width: "80%", backgroundColor: "yellow" }}
                    />
                </Stack>
                <Stack direction="row" spacing={4} >
                    <Typography
                        variant='label'
                        htmlFor="blog"
                        style={{ width: "10%", backgroundColor: "yellow" }}
                    >
                        Blog :-
                    </Typography>
                    <TextField
                        id="filled-multiline-static"
                        label="Blog..."
                        name='blog'
                        multiline
                        rows={4}
                        onChange={handleBlogData}
                        variant="filled"
                        style={{ width: "80%", backgroundColor: "yellow" }}
                    />
                </Stack>
                <Stack direction="row" spacing={4} >
                    <Typography
                        variant='label'
                        htmlFor="images"
                        style={{ width: "10%", backgroundColor: "yellow" }}
                    >
                        Imges :-
                    </Typography>
                    <input
                        id="files"
                        rows={4}
                        multiple
                        name='image'
                        onChange  = {handleBlogImage}
                        // onChange={(e) => setBlogDetails(prev => ({ ...prev, image: e.target.files }))}
                        type="file"
                        style={{ width: "80%", backgroundColor: "yellow" }}
                    />
                </Stack>

                <Stack direction="row" spacing={4} >
                    <Typography
                        variant='label'
                        htmlFor="submit"
                        style={{ width: "10%", backgroundColor: "yellow" }}
                    >
                        Submit :-
                    </Typography>
                    <Button
                        variant="contained"
                        color='info'
                        id="submitBtn"
                        label="Submit..."
                        type="submit"
                        onClick={submitBlogData}
                    >
                        click!
                    </Button>
                </Stack>

            </Stack>
        </Typography>
    )
}

export default AddBlog;