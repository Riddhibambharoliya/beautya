import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Common/Navbar";
// import Footer from "./Components/Common/Footer";
import Landing from "./Components/Landing";
import GiftsSetsMenu from "./Components/GiftsSetsMenu";
import ViewProduct from "./Components/ViewProduct";
import BranchesStockModal from "./Components/Modal/BranchesStockModal";

function App() {

  return (
    <>
      <div className="app h-screen ">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navbar/>}/> */}
            <Route path="/" element={<Landing/>}/>
            <Route path="/Gifts_Sets" element={<GiftsSetsMenu/>}/>
            <Route path="/View_Products" element={<ViewProduct/>}/>
            <Route path="/Stock_Modal" element={<BranchesStockModal/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
