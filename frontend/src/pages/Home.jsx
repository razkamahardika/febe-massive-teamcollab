import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import '../assets/pages/Home.css'

function Home() {
    return (
        <>
            <HeaderHome />

            <section class="banner">
                <div class="banner-content">
                    <h1>LOCAL FASHION</h1>
                    <p>Menjelajahi keindahan tekstil lokal dalam fashion modern.</p>
                </div>
            </section>

            <section class="information-helainusa">
                <h1>HelaiNusa.</h1>
                <p>HelaiNusa adalah platform e-commerce yang berfokus pada fashion lokal Indonesia. Kami berdedikasi untuk menyediakan wadah bagi para pecinta dan pencipta brand dalam negeri, dengan tujuan melestarikan serta mempromosikan kekayaan budaya Indonesia melalui fashion.</p>
            </section>

            <section className="story-local-fashion">
                <div className="story-images">
                    <div className="image">
                        <img src="/images/image1.png" alt="Fashion 1" />
                    </div>
                    <div className="image">
                        <img src="/images/image2.png" alt="Fashion 2" />
                    </div>
                    <div className="image">
                        <img src="/images/image3.png" alt="Fashion 3" />
                    </div>
                    <div className="image">
                        <img src="/images/image4.png" alt="Fashion 4" />
                    </div>
                </div>
                <div className="story-text">
                    <h1>The Story of A Local Fashion</h1>
                    <p>
                        Di HelaiNusa, kami percaya bahwa setiap helai kain memiliki cerita dan setiap desain mencerminkan keindahan serta keragaman budaya kita. Kami bekerja sama dengan berbagai desainer dan pengrajin lokal untuk menghadirkan produk-produk berkualitas tinggi yang tidak hanya mengikuti tren, tetapi juga mengangkat nilai-nilai tradisional Indonesia
                    </p>
                </div>
            </section>

            <section className="best-seller">
                <div className="best-header">
                    <h2 className="best-title">Best Seller</h2>
                    <a href="#" className="best-more-link">More+</a>
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
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
