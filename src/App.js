import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Error from "./components/Error";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<><Navbar/><Header/></>}></Route>
            <Route exact path="about" element={<><Navbar/><About/></>}></Route>
            <Route path="*" exact='true' element={<><Navbar/><Error/></>}></Route>
          </Routes>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
