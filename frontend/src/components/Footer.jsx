import tiktokLogo from '/images/tiktok-icon.png'
import instagramLogo from '/images/instagram-icon.png'
import facebookLogo from '/images/facebook-icon.png'
import whatsappLogo from '/images/whatsapp-icon.png'
import '../assets/components/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="content">
                <div class="footer-left">
                    <h2>HelaiNusa</h2>
                    <div class="social-icons">
                        <a href="#"><img src={tiktokLogo} alt="TikTok" /></a>
                        <a href="#"><img src={instagramLogo} alt="Instagram" /></a>
                        <a href="#"><img src={facebookLogo} alt="Facebook" /></a>
                        <a href="#"><img src={whatsappLogo} alt="WhatsApp" /></a>
                    </div>
                    <p>2024 Local Fashion Website</p>
                </div>
                <div class="footer-right">
                    <div class="footer-column">
                        <a href="#">Make a new account</a>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Language</a>
                    </div>
                    <div class="footer-column">
                        <a href="#">Make a new account</a>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Language</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
