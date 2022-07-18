import Blog from "./Blog";
import "./Home.css";

import React, {useContext} from "react";
import blogContext from "../context/blog/BlogContext";

function Home(){
    const data = useContext(blogContext)
    return data && <div className="centerHome">
            <h1>Home</h1>
            {
                data.blogs.map((element,index)=>{
                        return <Blog data={element} key={index}/>
                })
            }
        </div>
}
export default Home;