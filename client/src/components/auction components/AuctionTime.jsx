import React from 'react'

const AuctionTime = ({ auction }) => {
    const { endDate, toDate} = auction;
  return (
    <div>
        <h3 className="auction_details-title">موعد المزاد</h3>
        <div className="auction_details_description-container">
            <div className="auction-time">
                <span><i className="zmdi zmdi-time"></i></span>
                <span className="start-date-parg"> يبدا من</span>
                <span className="start-date">{endDate} <i className="zmdi zmdi-calendar"></i></span>
                <span className="start-date-parg">حتى</span>
                <span className="start-date">{toDate} <i className="zmdi zmdi-calendar-close"></i></span>
            </div>
        </div>
    </div>
  )
}

export default AuctionTime;
