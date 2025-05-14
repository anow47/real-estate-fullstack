import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import listingsData from "../Data/allListings";
import AuctionImage from "../components/auction components/AuctionImage";
import AuctionMap from "../components/auction components/AuctionMap";

const DetailsPage = () => {
  const [ listing, setListing ] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const getProject = (projectId) => 
      listingsData.find((project) => project.id === parseInt(projectId));

    const listingData = getProject(id);

    if (!listingData) {
      throw new Error(`Listing with id ${id} not found.`);
    }

    setListing(listingData);

  }, [id]);

  if (!listing) return <div>Loading...</div>;

  const { title, description } = listing;
  
  return (
    <div>
      <div className="auction">
        <h1 className="auction_type">نوع العقار: {title} </h1>
        <div className="auction_container">
          <div className="img-map-conatiner">
            <AuctionImage auction={listing} />
            <AuctionMap key={id} {...listing} />
          </div>
          <div className="auction_details">
            <h2 className="auction_details-title">{title}</h2>
            <div className="auction_details_description-container">
              <p className="auction_details-description">{description}</p>
            </div>

            <button
              onClick={() => navigate("/projects")}
              className="back-btn btn"
            >
              رجوع
              <span className="back-btn-icon">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DetailsPage;