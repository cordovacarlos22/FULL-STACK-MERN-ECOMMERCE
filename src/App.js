
import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"
// import Announcement from './components/Annoncement';
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { UserProvider } from "./context/userContext.js";
import Payment from "./components/Pay/Payment";
import SucessPayment from "./components/Pay/SucessPayment";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
// import NavBars from "./components/Navbar/NavBar.jsx";
export default function App() {
   
  
  return (
    <div className="App main-container   w-screen h-screen " >
      <div className="links-container">
        <BrowserRouter>
          <UserProvider>
            {/* <Announcement /> */}
            {/* <NavBars /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pay" element={< Payment />} />
              <Route path="/sucesspayment" element={<SucessPayment />} />
              <Route path="/UserLogin" element={<Login />} />
              <Route path="/UserRegister" element={<Register />} />
              
            </Routes>
            {/* <Footer/> */}
          </UserProvider>

        </BrowserRouter>
      </div>
    </div>
  )
}