import React, { useState, useEffect } from 'react';
import './countdown.css';

const TimeUnit = ({ value, label }) => (
  <div className="countdown-box">
    <div className="countdown-number">
      {String(value).padStart(2, '0')}
    </div>
    <div className="countdown-label">
      {label}
    </div>
  </div>
);

const AuctionCountdown = ({ auctionDate }) => {
  // Set your auction end date here
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(auctionDate) - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        document.querySelector('.status').textContent = 'منتهي';
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [auctionDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-boxes">
        <TimeUnit value={timeLeft.seconds} label="ثانية" />
        <TimeUnit value={timeLeft.minutes} label="دقيقة" />
        <TimeUnit value={timeLeft.hours} label="ساعة" />
        <TimeUnit value={timeLeft.days} label="يوم" />
      </div>
    </div>
  );
};

export default AuctionCountdown;