// import Home from "./component/Home/Home";
import AddBlog from "./component/AddBlog/AddBlog";
// import Signup from "./component/Signup/Signup";
// import Login from "./component/Login/Login";


// import MuiVerient from "./component/MuiVerient";
// import MuiButton from "./component/MuiButton";

import BlogState from "./context/blog/BlogState";

function App() {
  return (
    <BlogState>
      {/* <Login/> */}
      {/* <Home/> */}
      <AddBlog/>
    </BlogState>
  );
}

export default App;
