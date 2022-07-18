import "./Navbar.css";
import {NavLink} from "react-router-dom"

function Navbar(){
    return (
        <nav>
            <ul>
                <NavLink className="navLi" to="/">Home</NavLink>
                <NavLink className="navLi" to="/login">Login</NavLink>
                <NavLink className="navLi" to="/signup">Signup</NavLink>
                <NavLink className="navLi" to="/addBlog">Add Blog</NavLink>
                {/* <NavLink className="navLi" to="/profile">Profile</NavLink> */}
            </ul>
        </nav>
    )
}

export default Navbar;