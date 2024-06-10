import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import "../assets/pages/Productpage.css";

const productsData = [
  {
    id: 1,
    name: "Baju Batik Pria",
    price: 100000,
    imageUrl: "/images/product1.png",
    type: "Type 1",
    details: "Product Details ",
  },

  {
    id: 2,
    name: "Baju Batik anak-anak",
    price: 200000,
    imageUrl: "/images/product2.png",
    type: "Type 2",
    details: "Product Details",
  },

  {
    id: 3,
    name: "Baju Batik Wanita",
    price: 150000,
    imageUrl: "/images/image4.png",
    type: "Type 1",
    details: "Product Details ",
  },

  {
    id: 4,
    name: "Selendang",
    price: 150000,
    imageUrl: "/images/image5.png",
    type: "Type 1",
    details: "Product Details ",
  },

  {
    id: 5,
    name: "Outher Batik",
    price: 150000,
    imageUrl: "/images/image3.png",
    type: "Type 2",
    details: "Product Details ",
  },
  // Add more products as needed
];

const ProductPage = () => {
  const [flipped, setFlipped] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const [priceInput, setPriceInput] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTypeSelect = (type) => {
    if (type === "All") {
      setSelectedType("");
    } else {
      setSelectedType(type);
    }
  };

  const togglePriceInput = () => {
    setPriceInput(!priceInput);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Filter the products based on selected type and max price
  const filteredProducts = productsData.filter((product) => {
    const matchesType = selectedType ? product.type === selectedType : true;
    const matchesPrice = maxPrice ? product.price <= maxPrice : true;
    return matchesType && matchesPrice;
  });

  return (
    <>
      <Header />

      <div className="container">
        <div className="title-containers">
          <h1 className="page-title">Let's find something</h1>
          <div className="filter-container">
            <Dropdown
              options={["All", "Type 1", "Type 2"]} // Add more options as needed
              onSelect={handleTypeSelect}
            />
            <div className="filter-item">
              <div className="filter-label" onClick={togglePriceInput}>
                Max Price
                <span className={`filter-icon ${priceInput ? "open" : ""}`}>
                  +
                </span>
              </div>
              {priceInput && (
                <input
                  className="filter-input"
                  type="number"
                  id="price"
                  name="price"
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              )}
            </div>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleFlip(product.id)}
            >
              <div
                className={`card-inner ${
                  flipped[product.id] ? "is-flipped" : ""
                }`}
              >
                <div
                  className="card-face card-front"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                >
                  {/* Image front */}
                </div>
                <div className="card-face card-back">
                  Karya yang dibuat dengan penuh kasih sayang
                </div>
              </div>
              <div className="product-details">
                <Link to="/ProductDetail">
                  <div className="product-detail">{product.details}</div>
                </Link>
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  Rp. {product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
