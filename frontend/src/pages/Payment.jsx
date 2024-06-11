import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/pages/Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [coupon, setCoupon] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState(product ? product.price : 0);
  const [taxRate] = useState(0.1);
  const [total, setTotal] = useState(price + price * taxRate);
  const [discount, setDiscount] = useState(0); // Added for coupon discount

  // State for validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setPrice(product.price);
      setTotal(product.price + product.price * taxRate);
    } else {
      console.error('No product data received');
    }
  }, [product, taxRate]);

  const validateForm = () => {
    let formErrors = {};
    if (!address) formErrors.address = "Address is required";
    if (!city) formErrors.city = "City is required";
    if (!province) formErrors.province = "Province is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCouponApply = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/coupons/${coupon}`);
      if (response.ok) {
        const couponData = await response.json();
        setDiscount(couponData.discountAmount);
        setTotal((price - couponData.discountAmount) + (price * taxRate));
        console.log("Coupon Applied:", coupon);
      } else {
        console.error("Invalid coupon code");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

const handleBuyNow = async () => {
  if (!validateForm()) {
    return;
  }

  const orderData = {
    product_name: product.name,
    quantity: 1,
    price: price - discount,
    address: address,
    city: city,
    province: province,
    total: total,
  };

  try {
    const response = await fetch("http://localhost:8081/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      console.log("Order placed successfully.");
      navigate("/payment-proof"); // Navigate to payment proof page
    } else {
      const errorText = await response.text(); // Get response body as text
      console.error("Error saving order:", errorText);
    }
  } catch (error) {
    console.error("Error saving order:", error);
  }
};


  if (!product) {
    return <div>No product selected for purchase.</div>;
  }

  return (
    <>
      <Header />
      <div className="order-summary">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th className="prodname">Item</th>
              <th className="quantity">Quantity</th>
              <th className="price">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="prodname">{product.name}</td>
              <td className="quantity">1</td>
              <td className="price">Rp. {price.toLocaleString("id-ID")},-</td>
            </tr>
          </tbody>
        </table>
        <div className="coupon-container">
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={handleCouponApply}>Apply</button>
        </div>
        <div className="subtotal">
          <h2>Sub Total</h2>
          <span>Rp. {price.toLocaleString("id-ID")},-</span>
        </div>
        <div className="tax">
          <h2>Tax (10%)</h2>
          <span>
            Rp. {(price * taxRate).toLocaleString("id-ID")},-
          </span>
        </div>
        <div className="total">
          <h2>Total</h2>
          <span> Rp. {total.toLocaleString("id-ID")},-</span>
        </div>
        <div className="personal-info">
          <h3>Fill up your personal information</h3>
          <div>
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>
          <div className="city-province">
            <div>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
              {errors.province && <span className="error-message">{errors.province}</span>}
            </div>
          </div>
        </div>

        <div className="content-bottom">
          <p>
            By clicking "Buy Now" button below, you are agree to become the part
            of our journey to make local fashion bigger, and better.
          </p>
          <button className="bottom-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
