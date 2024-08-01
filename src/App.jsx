import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Landing from "./Components/Landing";

import './App.css'
import GiftsSetsMenu from "./Components/GiftsSetsMenu";

function App() {

  return (
    <>
      <div className="app h-screen ">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navbar/>}/> */}
            <Route path="/" element={<Landing/>}/>
            <Route path="/Gifts_Sets" element={<GiftsSetsMenu/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
