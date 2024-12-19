import { useState, useEffect } from 'react';
import './auctions.css';
import auctionsData from '../Data/auctionsData';
import FilterActions from '../components/filterAuctions';

function Auctions() {
    const [auctions, setAuctions] = useState(auctionsData);
    useEffect(() => {
        const today = new Date();

        const updatedAuctions = auctions.map(auction => {
            const auctionDateParts = auction.date.split(' ')[1].split('/');
            const auctionDate = new Date(
                parseInt(auctionDateParts[2]), // year
                parseInt(auctionDateParts[1]) - 1, // month (0-based)
                parseInt(auctionDateParts[0]) // day
            );

            if (today > auctionDate) {
                return { ...auction, status: 'finished' };
            }
            return auction;
        });

        setAuctions(updatedAuctions);
    }, [auctions]);

    return (
        <div className="auctions">
            <section className="auctions_feature">
                <div className="filter_banner">
                    <FilterActions />
                </div>
                <div className="row feature_inner">
                    {/* {auctions.filter(auction => auction.status === 'running').map((auction, index) => ( */}
                    {auctionsData.map((auction, index) => (
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={auction.img} alt="" />
                                </div>
                                <div className="content-frame-link">
                                    <h2 className='title'>{auction.title}</h2>
                                    <span className='date'>{auction.date}</span>
                                </div>    
                            </div>
                        </div>
                    ))}
                    {/* ))} */}
                </div>
            </section>
        </div>
    );
}

export default Auctions;