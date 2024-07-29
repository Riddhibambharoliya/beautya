import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {

  return (
    <>
      <div className="app h-screen">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navbar/>}/> */}
            <Route path="/" element={<Footer/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
