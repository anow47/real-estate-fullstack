import React from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const AboutAuction = ({ auction }) => {
    const { seller, license} = auction;

    // Add loading state
    const handleWhatsApp = () => {
        // Replace phoneNumber with the actual number from your auction data
        const phoneNumber = auction.phoneNumber;
        const message = `استفسار بخصوص: ${auction.title}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    // Handel phone calls
    const handleCall = () => {
        // Replace phoneNumber with the actual number from your auction data
        window.location.href = `tel:${auction.phoneNumber}`;
    };
    
  return (
    <div>
        <h2 className="auction_details-title">عن المزاد</h2>
        <div className="auction_details_description-container">
            <h3 className="auction-onwer-title">وكيل البيع</h3>
            <p className="auction-owner">{seller}</p>
            <p className="auction-onwer-title">رخصة العقارية للمزادات</p>
            <span className="auction-owner">{license}</span>
            <div className="contact-buttons">
                <button onClick={handleWhatsApp} className="whatsapp-btn"><FaWhatsapp /> WhatsApp</button>
                <button onClick={handleCall} className="call-btn"><FaPhone /> اتصال</button>
            </div>
        </div>
    </div>
  )
}

export default AboutAuction
