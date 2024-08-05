import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Common/Navbar";
// import Footer from "./Components/Common/Footer";
import Landing from "./Components/Landing";
import GiftsSetsMenu from "./Components/GiftsSetsMenu";
import ViewProduct from "./Components/ViewProduct";
import BranchesStockModal from "./Components/Modal/BranchesStockModal";
import BlogMenu from "./Components/BlogMenu";
import BlogDetails from "./Components/BlogDetails";
import ContactUs from "./Components/ContactUs";
import FAQs from "./Components/FAQs";
import Brand from "./Components/Brand";

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
            <Route path="/View_Blog" element={<BlogMenu/>}/>
            <Route path="/Blog" element={<BlogDetails/>}/>
            <Route path="/Brand" element={<Brand/>}/>
            <Route path="/Contact_Us" element={<ContactUs/>}/>
            <Route path="/FAQs" element={<FAQs/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
