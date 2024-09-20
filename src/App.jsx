import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/registration/Signin";

function App() {

  return (
    <div className="App">
    <Router>
     <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/signin" element={ <Signin/> } />
     </Routes>
    </Router>
  </div>
  )
}

export default App
