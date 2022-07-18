import { Typography, TextField, Stack, Button } from '@mui/material'
import { useContext } from 'react';

import blogContext from '../context/blog/BlogContext';

function AddBlog() {
    const {handleBlogData, handleBlogImage, submitBlogData} = useContext(blogContext)

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