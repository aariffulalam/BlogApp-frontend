import Home from "./component/Home";
import AddBlog from "./component/AddBlog";
import Signup from "./component/Signup";
import Login from "./component/Login";

import Varify from "./component/Verify";

import AuthState from "./context/authContext/authState";
import BlogState from "./context/blog/BlogState";
import Navbar from "./component/Navbar";

import {Routes, Route} from "react-router-dom"
import Profile from "./component/Profile";

function App() {
  return (
    <AuthState>
      <BlogState>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/verify" element={<Varify/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/addBlog" element={<AddBlog/>}/>
        </Routes>
      </BlogState>
    </AuthState>
  );
}

export default App;
