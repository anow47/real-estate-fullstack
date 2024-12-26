import React, { useState } from 'react';
import './filter.css';

function FilterActions() {
    const [formData, setFormData] = useState({
        propertyType: '',
        city: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // If city changes, reset area
        if (name === 'city') {
            setFormData(prevState => ({
                ...prevState,
                area: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    // Property types data
    const propertyTypes = [
        { id: 1, value: 'residential-commercial', label: 'عمارة سكنية تجارية' },
        { id: 2, value: 'commercial', label: 'عمارة تجارية' },
        { id: 3, value: 'commercial-land', label: 'أرض تجارية' }
    ];

    // Cities data
    const cities = [
        { id: 1, value: 'riyadh', label: 'الرياض' },
        { id: 2, value: 'dammam', label: 'الدمام' }
    ];

    // Status
    const status = [
        {id: 1, value: 'finshed', label: 'منتهي'},
        {id: 2, value: 'running', label: 'جاري الان'},
        {id: 3, value: 'soon', label: 'قادم'},
    ];

    return (
        <form onSubmit={handleSubmit}>
            <div className="std-filters-box prop-filters radius-10 grid-5 grid-2-t grid-1-p">
                {/* Area Field */}
                <div className="form-group mb-15-p">
                    <p className="top-title font-18 mb-10">الحالة</p>
                    <select
                        className="input"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        // disabled={!formData.city}
                    >
                        <option value="">يرجى الاختيار</option>
                        {status.map(stat => (
                            <option key={stat.id} value={stat.value}>{stat.label}</option>
                        ))}
                    </select>
                </div>
                {/* Property Type Field */}
                <div className="field-group mb-15-p">
                    <p className="top-title font-18 mb-10">نوع العقار</p>
                    <select
                        className="input"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                    >
                        <option value="">يرجى الاختيار</option>
                        {propertyTypes.map(type => (
                            <option key={type.id} value={type.value}>{type.label}</option>
                        ))}
                    </select>
                </div>
                {/* City Field */}
                <div className="form-group mb-15-p">
                    <p className="top-title font-18 mb-10">المدينة</p>
                    <select
                        className="input"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    >
                        <option value="">يرجى الاختيار</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.value}>{city.label}</option>
                        ))}
                    </select>
                </div>
                {/* Submit Button */}
                <div className="form-group d-flex align-end">
                    <button type="submit" className="btn">البحث</button>
                </div>
            </div>
        </form>
    );
}

export default FilterActions;