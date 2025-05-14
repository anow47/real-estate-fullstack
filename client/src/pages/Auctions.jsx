import { useNavigate } from "react-router-dom";
import { useState } from "react";
import auctionsData from "../Data/allListings";
import FilterAuctions from "../components/FilterAuctions";
import AuctionCountdown from "../components/auction components/CountDown";
import "./auctions.css";

function Auctions() {
  const [filters, setFilters] = useState({});
  const [filteredAuctions, setFilteredAuctions] = useState(auctionsData);
  const navigate = useNavigate();

  const handleFilterChange = (newfilter) => {
    setFilters(newfilter);
    // You can use the filters for further processing or API calls
    // Filter the auctions based on newfilter
    const filtered = auctionsData.filter((auction) => {
      return (
        (!newfilter.propertyType || auction.type === newfilter.propertyType) &&
        (!newfilter.region || auction.region === newfilter.region)
      );
    });

    setFilteredAuctions(filtered);
  };

  return (
    <div className="auctions">
      <section className="auctions_feature">
        <div className="filter_banner">
          <FilterAuctions
            auctions={auctionsData}
            onFilterSubmit={handleFilterChange}
          />
        </div>
        <div className="row feature_inner">
          {filteredAuctions.map((auction) => (
            <div
              className="all col-lg-4 col-sm-6"
              onClick={() => navigate(`/auction/${auction.id}`)}
              key={auction.id}
            >
              <div className="feature_item">
                <div className="img_container">
                  <img src={auction.img} alt={auction.title} />
                  <span className="region-tag">{auction.region}</span>
                  <span className="status"></span>
                </div>
                <div className="content-frame-link">
                  <h2 className="title">{auction.title}</h2>
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
