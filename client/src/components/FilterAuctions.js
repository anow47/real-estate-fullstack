import React, { useState } from 'react';
import './filter.css';

function FilterAuctions({ onFilterSubmit, auctions}) {
    const [ propertyType, setPropertyType ] = useState('');
    const [ region, setRegion ] = useState('');

    // Extract unique options for dropdowns
    const uniqueOptions = (key) => [
        ...new Set(auctions.map((auction) => auction[key]))
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform filtering or pass the state to parent component
        const newfilter = { propertyType, region }
        
        onFilterSubmit(newfilter);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="std-filters-box prop-filters radius-10 grid-5 grid-2-t grid-1-p">
                {/* Property Type Field */}
                <div className="field-group mb-15-p">
                    <p className="top-title font-18 mb-10">نوع العقار</p>
                    <div className="select-wrapper">
                        <select
                            className="input"
                            name="propertyType"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="">الكل</option>
                            {uniqueOptions('type').map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Region Field */}
                <div className="form-group mb-15-p">
                    <p className="top-title font-18 mb-10">المدينة</p>
                    <div className="select-wrapper">
                        <select
                            className="input"
                            name="region"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value="">الكل</option>
                            {uniqueOptions('region').map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="form-group d-flex align-end">
                    <button type="submit" className="btn">البحث</button>
                </div>
            </div>
        </form>
    );
};

export default FilterAuctions;
