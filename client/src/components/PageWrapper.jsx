import { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './Spinner';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Auctions from '../pages/Auctions';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import AuctionsDetails from '../pages/AuctionDetails'

export default function PageWrapper() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        },1); // Adjust based on your needs
    }, [location.pathname]); // Trigger the effect when the route changes

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/auctions' element={<Auctions />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/auction/:id' element={<AuctionsDetails />} />
                </Routes>
            )}
        </div>
    );
}
