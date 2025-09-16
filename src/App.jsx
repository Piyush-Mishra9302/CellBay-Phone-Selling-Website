import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./AdminDashboard";
import AddProduct from "./admin pages/AddProduct";
import Pricing from "./pages/Pricing";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Orders from "./admin pages/Orders";


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
            </Route>
          </Routes>

            <Routes>
             <Route path="/admin" element={<AdminDashboard/>}>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="orders" element={<Orders/>} />
                
             
             </Route>

          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App;