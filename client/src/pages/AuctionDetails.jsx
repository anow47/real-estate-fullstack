import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import auctionsData from "../Data/auctionsData";
import AuctionCountdown from "../components/CountDown";
import ImagePopup from "../components/ImagePopup";
import "./displayDetails.css";

function DisplayDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [auction, setAuction] = useState(null);
    const [selectedImages, setSelectedImages] = useState(null);

    const openImagePopup = (images) => {
        setSelectedImages(images);
    };

    const closeImagePopup = () => {
        setSelectedImages(null);
    };

    useEffect(() => {
        const getAuctionById = (auctionId) =>
            auctionsData.find(auction => auction.id === parseInt(auctionId));
        
        const auctionData = getAuctionById(id);
        if (!auctionData) {
            console.error(`Auction with id ${id} not found`);
        }
        setAuction(auctionData);
    }, [id]);

    if (!auction) return <div>Loading...</div>;

    const { type, img, title, description, endDate } = auction;

    return (
        <div className="auction">
            <h1 className="auction_type">{type}</h1>
            <div className="auction_container">
                <div
                    className={`auction_img ${selectedImages?.id === auction.id ? "selected" : ""}`}
                    onClick={() => openImagePopup(auction.images)}
                >
                    <span className='status'></span>
                    <img src={img} alt={title} />
                </div>
                <div className="auction_details">
                    <h2 className="auction_details-title">{title}</h2>
                    <div className="auction_details_description-container">
                        <p className="auction_details-description">{description}</p>
                        <AuctionCountdown auctionDate={endDate} />
                    </div>
                    <button onClick={() => navigate("/auctions")} className="back-btn btn">رجوع</button>
                </div>
            </div>
            {selectedImages && (
                <ImagePopup images={selectedImages} onClose={closeImagePopup} />
            )}
        </div>
    );
}

export default DisplayDetails;
