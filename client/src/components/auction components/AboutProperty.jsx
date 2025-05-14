
const AboutProperty = ({ auction }) => {
    const { city, indexNumber, propertyNumber, areaNumber, bankNumber, squareDimintions } = auction;
    
    return (
        <div>
            <h3 className="auction_details-title">عن العقار</h3>
            <div className="auction_details_description-container">
                <h4 className="auction_details_description-city">{city}</h4>
                <div className="auction_details_description-about">
                    <span>335899637</span>
                    <p className="description-about-header">{indexNumber}</p>
                </div>
                <div className="auction_details_description-about">
                    <span>{propertyNumber}</span>
                    <p className="description-about-header">رقم القطعة</p>
                </div>
                <div className="auction_details_description-about">
                    <span>{areaNumber}</span>
                    <p className="description-about-header">رقم المخطط</p>
                </div>
                <div className="auction_details_description-about">
                    <span>{bankNumber}</span>
                    <p className="description-about-header">رقم البنك</p>
                </div>
                <div className="auction_details_description-diminstions">
                    <div className="square-area">
                        <div>م2</div>
                        <span className="square-area-header">{squareDimintions}</span>
                    </div>
                    <p className="square-area-header">المساحة</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProperty;
