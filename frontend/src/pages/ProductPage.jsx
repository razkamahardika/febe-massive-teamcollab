import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import '../assets/pages/Productpage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const [priceInput, setPriceInput] = useState(false);
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Log the fetched data
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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

  const filteredProducts = products.filter((product) => {
    const matchesType = selectedType ? product.type === selectedType : true;
    const matchesPrice = maxPrice ? product.price <= maxPrice : true;
    return matchesType && matchesPrice;
  });

  return (
    <>
      <Header />

      <div className="container">
        <div className='title-containers'>
          <h1 className="page-title">Let's find something</h1>
          <div className="filter-container">
            <Dropdown
              options={["All", "Type 1", "Type 2"]} // Add more options as needed
              onSelect={handleTypeSelect}
            />
            <div className="filter-item">
              <div className="filter-label" onClick={togglePriceInput}>
                Max Price
                <span className={`filter-icon ${priceInput ? 'open' : ''}`}>+</span>
              </div>
              {priceInput && (
                <input
                  className="filter-input"
                  type="number" id="price"
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
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className={`card-inner ${flipped[product.id] ? 'is-flipped' : ''}`}>
                  <div className="card-face card-front" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                    {/* Image front */}
                  </div>
                  <div className="card-face card-back">
                    <div className="product-detail">
                      <p>{product.customContent}</p>  {/* Display custom content */}
                    </div>
                  </div>
                </div>
              </Link>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">Rp. {product.price.toLocaleString()}</div>
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
