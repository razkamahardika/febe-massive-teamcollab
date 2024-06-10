import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../assets/pages/Payment.css";

const Payment = () => {
  const [coupon, setCoupon] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState(3000000);
  const [taxRate] = useState(0.1);
  const [total, setTotal] = useState(price + price * taxRate);

  const handleCouponApply = () => {
    // Implement coupon logic here
    console.log("Coupon Applied:", coupon);
  };

  const handleBuyNow = () => {
    // Implement purchase logic here
    console.log("Purchase Information:", { address, city, province });
  };

  return (
    <>
      <Header />
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="item">
          <span>Product Name</span>
          <span>Quantity: 1</span>
          <span>Price: Rp. {price.toLocaleString("id-ID")},-</span>
        </div>
        <div className="coupon">
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={handleCouponApply}>Apply</button>
        </div>
        <div className="subtotal">
          <span>Sub Total: Rp. {price.toLocaleString("id-ID")},-</span>
        </div>
        <div className="tax">
          <span>
            Tax (10%): Rp. {(price * taxRate).toLocaleString("id-ID")},-
          </span>
        </div>
        <div className="total">
          <span>Total: Rp. {total.toLocaleString("id-ID")},-</span>
        </div>
        <div className="personal-info">
          <h3>Fill up your personal information</h3>
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
        <Link to="/PaymentProof">
          <button onClick={handleBuyNow}>Buy Now</button>
        </Link>
        <p>
          By clicking "Buy Now" button below, you are agree to become the part
          of our journey to make local fashion bigger, and better.
        </p>
      </div>
    </>
  );
};

export default Payment;
