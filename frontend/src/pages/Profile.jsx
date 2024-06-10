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
              <p className="profile-email">SepAsep@gmail.com</p>
            </div>
            <button className="edit-profile-button">
              <a href="/Editprofile"> Edit Profile </a>
            </button>
          </div>
          <div className="order-status">
            {["To Pay", "To Ship", "To Receive", "Done"].map((status) => (
              <div className="status-card" key={status}>
                <h2>{status}</h2>
                <div className="product">
                  <img
                    src="/images/product1.png"
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="product-info">
                    <p className="product-name">Nama Produk</p>
                    <p className="product-description">Deskripsi Produk</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="column">
            <h2>Aktivitas</h2>
            {[
              { icon: faHome, text: "Home", link: "Home" },
              { icon: faHeart, text: "Wishlist", link: "Wishlist" },
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
          <div className="contact-button">
            <img src="./images/whatsapp-icon.png" alt="Ikon WhatsApp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
