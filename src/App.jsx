import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./AdminDashboard";
import AddProduct from "./admin pages/AddProduct";
import Pricing from "./pages/Pricing";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Orders from "./admin pages/Orders";
import Sell from "./pages/Sell";
import SellPhonesAdmin from "./admin pages/SellProduct";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="category/:categoryName" element={<Pricing/>} />
            <Route path = "cart" element={<CartPage/>} />
            <Route path = "checkout" element={<CheckoutPage/>} />
            <Route path = "sell" element={<Sell/>} />
            <Route path = "aboutus" element={<AboutUs/>} />
            <Route path="contactus" element={<ContactUs/>} />
            </Route>
          </Routes>

            <Routes>
             <Route path="/admin" element={<AdminDashboard/>}>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="orders" element={<Orders/>} />
              <Route path="sell" element={<SellPhonesAdmin/>} />   
             
             </Route>

          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App;