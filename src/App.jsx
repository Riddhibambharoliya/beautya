import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Landing from "./Components/Landing";

import './App.css'

function App() {

  return (
    <>
      <div className="app h-screen ">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navbar/>}/> */}
            <Route path="/" element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
