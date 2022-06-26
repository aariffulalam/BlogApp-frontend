// import Home from "./component/Home/Home";
// import AddBlog from "./component/AddBlog";
// import Signup from "./component/Signup/Signup";
import Login from "./component/Login/Login";


// import MuiVerient from "./component/MuiVerient";
// import MuiButton from "./component/MuiButton";

import BlogState from "./context/blog/BlogState";

function App() {
  return (
    <BlogState>
    {/* <div className="App"> */}
      <Login/>
      {/* <Home/> */}
      {/* <AddBlog/> */}
      
      {/* <Signup/> */}

      {/* <MuiVerient/> */}
      {/* <MuiButton/> */}
    {/* </div> */}
    </BlogState>
  );
}

export default App;
