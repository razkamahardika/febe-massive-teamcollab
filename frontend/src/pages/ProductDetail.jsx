import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Review from '../components/Review';
import CarouselComp from '../components/CarouselComp';
import '../assets/pages/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

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
    // Handle adding to wishlist logic here
    console.log('Added to wishlist:', product.id);
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
            ❤️
          </button>
        </div>
        <div className="product-details-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">Rp. {product.price.toLocaleString()}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-variants">
            <div className="variant variant1"></div>
            <div className="variant variant2"></div>
            <div className="variant variant3"></div>
          </div>
          <div className="product-actions">
            <button className="buy-now-button">
              <a href="/Payment">Buy Now</a></button>
            <button className="put-in-cart-button">Put it on my cart</button>
          </div>
        </div>
      </section>

      <div className="section__2">
        <div className="section__2-content">
          <h1>About this product</h1>
          <p>{product.about}</p>
        </div>
        <CarouselComp productId={id} />
      </div>

      <section className="recommendation">
        <div className="header">
          <h2 className="title">You May Also Like</h2>
          <a href="#" className="more-link">More+</a>
        </div>
        <div className="items">
          {recommendedProducts.map((recProduct) => (
            <div key={recProduct.id} className="recommended-item">
              <img src={recProduct.imageUrl} alt={recProduct.name} />
              <p>{recProduct.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Review />
    </>
  );
};

export default ProductDetail;
