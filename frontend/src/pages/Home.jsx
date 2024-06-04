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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue vestibulum arcu in dignissim. Mauris
                    convallis
                    vitae urna quis mattis. Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc eget feugiat
                    lorem. Donec
                    tellus justo, porttitor eu cursus cursus, pellentesque ut quam. Curabitur at arcu</p>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
                        vestibulum arcu in dignissim. Mauris convallis vitae urna quis mattis.
                        Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc
                        eget feugiat lorem. Donec tellus justo, porttitor eu cursus cursus,
                        pellentesque ut quam. Curabitur at arcu.
                    </p>
                </div>
            </section>

            <section className="best-seller">
                <div className="header">
                    <h2 className="title">Best Seller</h2>
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
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
