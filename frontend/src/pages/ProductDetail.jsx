import React from "react";
import "../assets/pages/ProductDetail.css";
import Header from "../components/Header";
import Review from "../components/Review";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <section className="product-page">
        <div className="product-image-section">
          <img
            src="../images/product1.png" // Replace with your image path
            alt="Product"
            className="product-image"
          />
        </div>
        <div className="product-details-section">
          <h1 className="product-name">Product Name</h1>
          <p className="product-price">Rp. 3.000.000,-</p>
          <p className="product-description">budaya</p>
          <div className="product-variants">
            <div className="variant variant1"></div>
            <div className="variant variant2"></div>
            <div className="variant variant3"></div>
          </div>
          <div className="product-actions">
            <button className="buy-now-button">Buy Now</button>
            <button className="put-in-cart-button">Put it on my cart</button>
          </div>
        </div>
      </section>

      <div class="section__2">
        <h1>About this product</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          soluta nihil molestias sequi ad, illo quaerat vel. Qui, nobis
          repudiandae voluptates molestiae consequuntur perferendis
          exercitationem rem non quibusdam, ratione doloremque!
        </p>
      </div>

      <section className="recomendation">
        <div className="header">
          <h2 className="title">You May Also Like</h2>
          <a href="#" className="more-link"></a>
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
            <img src="/images/image8.png" alt="item 4" />
          </div>
          <div className="item">
            <img src="/images/image8.png" alt="item 4" />
          </div>
          <div className="item">
            <img src="/images/image8.png" alt="item 4" />
          </div>
        </div>
      </section>

      <Review />
    </>
  );
};

export default ProductDetail;
