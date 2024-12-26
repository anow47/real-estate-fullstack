import React, { useState, useRef, useEffect } from 'react';
import MapWithPins from '../components/MapWithPins';
import listingsData from '../Data/mapData';
import { Link } from 'react-router-dom';
import './projects.css';
// const baseUrl = process.env.REACT_APP_BASE_URL;

function Projects() {
    const listings = listingsData;
    const [selectedLocation, setSelectedLocation] = useState(null);
    // const [items, setItems] = useState([]);
    const projectRefs = useRef({});
    const popupRef = useRef(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(baseUrl);
    //         const data = await res.json();
    //         setItems(data);
    //     }
    //     fetchData();
    // }, []);
    // console.log(items)

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);

        if (projectRefs.current[location.id]) {
            projectRefs.current[location.id].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    };

    const handleProjectClick = (item) => {
        setSelectedLocation(item);
        };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="projects">
            <div className='map_container'>
                <MapWithPins 
                    listings={listings}
                    onMarkerClick={handleMarkerClick}
                    selectedLocation={selectedLocation}
                />
                <p>...مشاريع متاحة الأن</p>
            </div>
            <section className="projects_feature">
                <div className="container">
                    <div className="row feature_inner">
                        {listings.map((item, index) => (
                            <div className="col-lg-4 col-sm-6" key={index} ref={el => projectRefs.current[item.id] = el}>
                                <Link to="/projectDisplay">
                                    <div className={`feature_item 
                                        ${ selectedLocation && selectedLocation.id === item.id ? 'selected' : ''}`}
                                            onClick={() => handleProjectClick(item)}
                                        >
                                        <span className="region">{item.region}</span>

                                        <div className="img_container">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="content-frame-link">
                                            <h2 className='content-frame-link-title'>{item.title}</h2>
                                            <div className='description-container'>
                                                <p className='description'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;