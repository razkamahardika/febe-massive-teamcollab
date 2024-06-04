import helaiLogo from "/images/logo.png";
import searchIcon from "/images/search-icon.png";
import userIcon from "/images/user-icon.png";
import heartIcon from "/images/heart-icon.png";
import cartIcon from "/images/cart-icon.png";
import "../assets/components/Header.css";

const HeaderHome = () => {
  return (
    <header>
      <div class="top-bar">
        <nav class="left-menu">
          <ul>
            <li>
              <a href="#men">Men</a>
            </li>
            <li>
              <a href="#women">Women</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
          </ul>
        </nav>

        <div class="logo">
          <a href="/home">
            <img src={helaiLogo} alt="HelaiNusa Logo" />
            <span class="logo-text">HelaiNusa.</span>
          </a>
        </div>

        <nav class="right-menu">
          <ul>
            <li>
              <a href="#search">
                <img src={searchIcon} alt="Search" />
              </a>
            </li>
            <li>
              <a href="/Login">
                <img src={userIcon} alt="Account" />
              </a>
            </li>
            <li>
              <a href="#Wishlist">
                <img src={heartIcon} alt="Wishlist" />
              </a>
            </li>
            <li>
              <a href="#Cart">
                <img src={cartIcon} alt="Cart" id="cart-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderHome;
