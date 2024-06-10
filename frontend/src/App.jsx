import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Chart from "./pages/Chart";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ProductDetail from "./pages/ProductDetail";
import ProductDetail1 from "./pages/ProductDetail1";
import "./App.css";
import PaymentProof from "./pages/PaymentProof";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/productdetail1" element={<ProductDetail1 />} />
          <Route path="/paymentproof" element={<PaymentProof />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
