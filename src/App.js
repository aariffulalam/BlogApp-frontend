import Home from "./component/Home/Home";
// import AddBlog from "./component/AddBlog/AddBlog";
// import Signup from "./component/Signup/Signup";
// import Login from "./component/Login/Login";


import AuthState from "./context/authContext/authState";
import BlogState from "./context/blog/BlogState";

function App() {
  return (
    <AuthState>
      <BlogState>
        {/* <Signup/> */}
        {/* <Login/> */}
        <Home/>
        {/* <AddBlog/> */}
      </BlogState>
    </AuthState>
  );
}

export default App;
