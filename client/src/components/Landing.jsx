import { useState, useEffect } from 'react';
import './landing.css';

function Landing() {
    const imgSlider = [
        { caption: 'ديتليز - العقارية', url: '', imgUrl: require('../images/slider-images/slider-1.jpg') },
        { caption: 'دراكو هومز', url: '', imgUrl: require('../images/slider-images/slider-2.jpg') },
        { caption: 'مشروع ديار - 20', url: '', imgUrl: require('../images/slider-images/slider-3.jpeg') },
        { caption: 'مشروع عرافة - 4', url: '', imgUrl: require('../images/slider-images/slider-4.jpg') },
        { caption: 'مشروع ديار - 22', url: '', imgUrl: require('../images/slider-images/slider-5.webp')},
        { caption: 'دقة فيلا', url: '', imgUrl: require('../images/slider-images/slider-6.webp')},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

        // Automatically slide images every second
        useEffect(() => {
            const intervalId = setInterval(() => {
                goToNext();
            }, 3000);
            // Cleanup the interval on component unmount
            return () => clearInterval(intervalId);
        }); // Dependency on currentIndex to update the interval

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imgSlider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === imgSlider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="landing">
            
            <div className="landing-slider">
                <button onClick={goToPrevious} className="prev-slide">&#10094;</button>
                <div className="slide-container">
                    <img
                        src={imgSlider[currentIndex].imgUrl}
                        className="slide"
                        alt={imgSlider[currentIndex].caption}
                        key={currentIndex}
                    />
                    <a href={imgSlider[currentIndex].url} className='caption'>{imgSlider[currentIndex].caption}</a>
                </div>
                <button onClick={goToNext} className="next-slide">&#10095;</button>
            </div>
        </div>
    );
}

export default Landing;