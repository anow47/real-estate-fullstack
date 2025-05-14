import { useParams, useNavigate } from "react-router-dom";
import AuctionCountdown from "../components/auction components/CountDown";
import AuctionMap from "../components/auction components/AuctionMap";
import auctionsData from "../Data/allListings";
import { useState, useEffect } from "react";
import AboutProperty from "../components/auction components/AboutProperty";
import AboutAuction from "../components/auction components/AboutAuction";
import AuctionTime from "../components/auction components/AuctionTime";
import AuctionImage from "../components/auction components/AuctionImage";
import "./displayDetails.css";

function DisplayDetails() {
  const [auction, setAuction] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getAuctionById = (auctionId) =>
      auctionsData.find((auction) => auction.id === parseInt(auctionId));

    const auctionData = getAuctionById(id);
    if (!auctionData) {
      console.error(`Auction with id ${id} not found`);
    }
    setAuction(auctionData);
  }, [id]);

  if (!auction) return <div>Loading...</div>;

  const { type, title, description, endDate } = auction;

  return (
    <div className="auction">
      <h1 className="auction_type">نوع العقار: {type} </h1>
      <div className="auction_container">
        <div className="img-map-conatiner">
          <AuctionImage auction={auction} />
          <AuctionMap key={id} {...auction} />
        </div>
        <div className="auction_details">
          <h2 className="auction_details-title">
            ( {id} ) {title}
          </h2>
          <div className="auction_details_description-container">
            <p className="auction_details-description">{description}</p>
            <AuctionCountdown auctionDate={endDate} />
          </div>

          <AuctionTime auction={auction} />
          <AboutProperty auction={auction} />
          <AboutAuction auction={auction} />

          <button
            onClick={() => navigate("/auctions")}
            className="back-btn btn"
          >
            رجوع
            <span className="back-btn-icon">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayDetails;
