import Home from "./component/Home";
// import AddBlog from "./component/AddBlog";
// import Signup from "./component/Signup";
// import Login from "./component/Login";


// import MuiVerient from "./component/MuiVerient";
// import MuiButton from "./component/MuiButton";

import NoteState from "./context/NoteState";

function App() {
  return (
    <NoteState>
    <div className="App">
      <Home/>
      {/* <AddBlog/> */}
      
      {/* <Signup/> */}
      {/* <Login/> */}

      {/* <MuiVerient/> */}
      {/* <MuiButton/> */}
    </div>
    </NoteState>
  );
}

export default App;
