import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Review from '../components/Review';
import CarouselComp from '../components/CarouselComp';
import '../assets/pages/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the navigate hook
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8081/recommended-products/${id}`)
      .then(response => response.json())
      .then(data => setRecommendedProducts(data))
      .catch(error => console.error('Error fetching recommended products:', error));
  }, [id]);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    console.log('Wishlist status changed:', !isWishlisted);
  };

  const handleBuyNowClick = () => {
    navigate('/Payment', { state: { product } });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <section className="product-page">
        <div className="product-image-section">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <button
            className="wishlist-button"
            onClick={handleWishlistClick}
          >
            {isWishlisted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="wishlist-icon"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="wishlist-icon"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </button>
        </div>
        <div className="product-details-section">
          <div className="name-price">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">Rp. {product.price.toLocaleString()}</p>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-variants">
            <div className="variant variant1"></div>
            <div className="variant variant2"></div>
            <div className="variant variant3"></div>
          </div>
          <div className="product-actions">
            <button className="buy-now-button" onClick={handleBuyNowClick}>
              Buy Now
            </button>
            <button className="put-in-cart-button">Put it on my cart</button>
          </div>
        </div>
      </section>

      <div className="section__2">
        <h1>About this product</h1>
        <div className="section__2-content">
          <p>{product.about}</p>
          <CarouselComp productId={id} />
        </div>
      </div>

      <section className="recomendation">
        <div className="header">
          <h2 className="title">You May Also Like</h2>
          <a href="#" className="more-link">More+</a>
        </div>
        <div className="items">
          <div className="item">
            <img src="/images/image5.png" alt="item 1" />
          </div>
          <div className="item">
            <img src="/images/image6.png" alt="item 2" />
          </div>
          <div className="item">
            <img src="/images/image7.png" alt="item 3" />
          </div>
          <div className="item">
            <img src="/images/image3.png" alt="item 4" />
          </div>
          <div className="item">
            <img src="/images/image4.png" alt="item 4" />
          </div>
          <div className="item">
            <img src="/images/image2.png" alt="item 4" />
          </div>
        </div>
      </section>

      <Review />
    </>
  );
};

export default ProductDetail;
