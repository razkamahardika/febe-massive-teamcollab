import React from "react";
import "../assets/pages/Wishlist.css";
import Header from "../components/Header"; // Import the CSS file for styling

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "Product Name 1",
      details: "Product Details",
      price: "Rp. 1.000.000",
      imageUrl: "../images/product1.png", // Update with actual image paths
    },
    {
      id: 2,
      name: "Product Name 2",
      details: "Product Details",
      price: "Rp. 2.000.000",
      imageUrl: "../images/product1.png", // Update with actual image paths
    },
  ];

  return (
    <>
      <Header />
      <div className="horizontal-line"></div>
      <div className="wishlist">
        <h1>Wishlist</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <p>{product.details}</p>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/yourwhatsappnumber"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

export default Wishlist;
