import React from 'react';
import "../assets/pages/Profile.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faStar,
  faBell,
  faLanguage,
  faCreditCard,
  faUniversity,
  faHeadset,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  { name: "Product Name", status: "To Ship" },
  { name: "Product Name", status: "To Ship" },
  { name: "Product Name", status: "To Ship" },
];

const ProductCard = ({ name }) => (
  <div className="product-card">
    <img src="/images/product1.png" alt={name} className="product-image" />
    <div className="product-info">
      <p className="product-name">{name}</p>
      <p className="product-description">{name}</p>
    </div>
    <span className="arrow">&gt;</span>
  </div>
);

const ProductList = ({ title, products }) => (
  <div className="product-list">
    <h2>{title}</h2>
    {products.map((product, index) => (
      <ProductCard key={index} name={product.name} />
    ))}
  </div>
);

const Profile = () => {
  return (
    <>
      <Header />
      <div className="horizontal-line"></div>
      <div className="Profile">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="/images/profile.png"
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1 className="profile-name">Ayu Lestari</h1>
              <p className="profile-email">ayulestari@gmail.com</p>
            </div>
            <button className="edit-profile-button">
              <a href="/Editprofile"> Edit Profile </a>
            </button>
          </div>
          <div className="fiturto">
            <div className="fiturto-container">
              <ProductList title="To pay" products={products} />
            </div>
            <div className="fiturto-container">
              <ProductList title="To ship" products={products} />
            </div>
            <div className="fiturto-container">
              <ProductList title="To receiver" products={products} />
            </div>
            <div className="fiturto-container">
              <ProductList title="Done" products={products} />
            </div>
          </div>
          <div className="fiturprofile">
            <div className="column">
              <h2>Aktivitas</h2>
              {[
                { icon: faHome, text: "Home", },
                { icon: faHeart, text: "Wishlist", },
                { icon: faStar, text: "Review" },
                { icon: faBell, text: "Notifikasi" },
                { icon: faLanguage, text: "Bahasa" },
              ].map((item, index) => (
                <div className="item" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  {item.link ? (
                    <a href={item.link}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="column">
              <h2>Pembayaran</h2>
              {[
                { icon: faCreditCard, text: "Konfigurasi Pembayaran" },
                { icon: faUniversity, text: "Rekening Bank" },
              ].map((item, index) => (
                <div className="item" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="column">
              <h2>Bantuan dan Keamanan</h2>
              {[
                { icon: faHeadset, text: "Layanan Pelanggan" },
                { icon: faUserShield, text: "Aktivitas Login" },
              ].map((item, index) => (
                <div className="item" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-button">
            <img src="./images/whatsapp-icon.png" alt="Ikon WhatsApp" />
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
    </>
  );
};

export default Profile;
