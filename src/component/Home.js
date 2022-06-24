import Blog from "./Blog";
import "./Home.css";

import React, {useContext} from "react";
import noteContext from "../context/NoteContext";


function Home(){
    const data = useContext(noteContext)
//     console.log(data)
    return data && <div className="centerHome">
            <h1>Home</h1>
            {
                data.map((element,index)=>{
                        // console.log("i am working", index)
                        // console.log(element.image[0])
                        // console.log(index)
                        return <Blog data={element} key={index}/>
                })
            }
            
                {/* <Blog image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <Blog image="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"/>
                <Blog image="https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/> */}

        </div>
}

export default Home;