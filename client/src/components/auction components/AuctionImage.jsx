import ImagePopup from "../../components/ImagePopup";
import { useState } from "react";

const AuctionImage = ({ auction }) => {
    const [selectedImages, setSelectedImages] = useState(null);

    const {region, img, title} = auction;

    const openImagePopup = (images) => {
        setSelectedImages(images);
    };

    const closeImagePopup = () => {
        setSelectedImages(null);
    };

  return (
    <div>
        <div
            className={`auction_img ${selectedImages?.id === auction.id ? "selected" : ""}`}
            onClick={() => openImagePopup(auction.images)}
        >
            <span className='region-tag'>{region}</span>
            <img src={img} alt={title} />
        </div>
        {selectedImages && (
            <ImagePopup images={selectedImages} onClose={closeImagePopup} />
        )}
    </div>
  )
}

export default AuctionImage;
