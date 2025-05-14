import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Auctions from '../pages/Auctions';
import AboutUs from '../pages/AboutUs';
import AuctionsDetails from '../pages/AuctionDetails'
import DetailsPage from '../pages/DetailsPage';

export default function PageWrapper() {

	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/auctions' element={<Auctions />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/auction/:id' element={<AuctionsDetails />} />
				<Route path='/details/:id' element={<DetailsPage />} />
			</Routes>
		</div>
	);
}
