import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/components/CarouselComp.css';

const CarouselComp = ({ productId }) => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8081/carousel-images/${productId}`)
            .then(response => response.json())
            .then(data => setCarouselImages(data))
            .catch(error => console.error('Error fetching carousel images:', error));
    }, [productId]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {carouselImages.map((image, index) => {
                    let className = 'carousel-slide';
                    if (index === currentIndex) {
                        className += ' active middle';
                    } else if (index === (currentIndex + 1) % carouselImages.length) {
                        className += ' right';
                    } else if (index === (currentIndex - 1 + carouselImages.length) % carouselImages.length) {
                        className += ' left';
                    }

                    return (
                        <div key={image.id} className={className}>
                            <img src={image.imageUrl} alt={`Carousel ${image.id}`} className="carousel-image" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CarouselComp;
