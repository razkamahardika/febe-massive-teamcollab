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
          <p className="product-description">Jaket Batik Modern terbuat dari kain batik tulis premium dan katun berkualitas tinggi. Dengan desain bomber yang trendi, jaket ini dilengkapi resleting depan, saku fungsional, dan manset elastis. Tersedia dalam berbagai ukuran (S, M, L, dan XL). Perawatannya mudah: gunakan detergen ringan, dan setrika dengan suhu rendah pada bagian dalam.</p>
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

      <div class="section__2">
        <h1>About this product</h1>
        <p>
          Jaket Batik Modern HelaiNusa dibuat dengan penuh dedikasi mulai dari pemilihan kain batik tulis berkualitas tinggi yang diproduksi oleh pengrajin lokal di Jawa Tengah. Setiap helai batik dihasilkan melalui proses tradisional yang teliti. Kain batik kemudian dipadukan dengan katun premium dan dijahit oleh penjahit berpengalaman menjadi jaket bomber yang stylish dan nyaman.
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
