import { useNavigate } from 'react-router-dom';
import auctionsData from '../Data/auctionsData';
import FilterActions from '../components/FilterAuctions';
import AuctionCountdown from '../components/CountDown';
import './auctions.css';

function Auctions() {
    const navigate = useNavigate();

    return (
        <div className="auctions">
            <section className="auctions_feature">
                <div className="filter_banner">
                    <FilterActions />
                </div>
                <div className="row feature_inner">
                    {auctionsData.map((auction) => (
                        <div className="all col-lg-4 col-sm-6" onClick={() => navigate(`/auction/${auction.id}`)} key={auction.id}>
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={auction.img} alt={auction.title} />
                                    <span className='status'></span>
                                </div>
                                <div className="content-frame-link">
                                    <h2 className='title'>{auction.title}</h2>
                                    <AuctionCountdown auctionDate={auction.endDate} />
                                </div>    
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Auctions;