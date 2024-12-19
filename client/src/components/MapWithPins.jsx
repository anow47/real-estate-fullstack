// src/components/MapWithPins.js
import React from 'react';
import { Link } from 'react-scroll';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import './mapStyle.css'
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: require('../images/map-pin-icon.png'),
  iconSize: [45, 45],
  iconAnchor: [22, 40],
  popupAnchor: [0, -41],
});

const MapWithPins = ({ listings, onMarkerClick}) => {
  
  const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'custom-marker-cluster',
      iconSize: L.point(50, 50, true),
    });
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <MapContainer center={[24.7136, 46.6753]} zoom={10} style={{ position: 'relative', bottom: '5px', height: '300px', width: '100%', borderRadius: '1rem 1rem 0 0'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
          zoomToBoundsOnClick={true}
          maxClusterRadius={40}>

            {listings.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={customIcon}
                >
                <Popup>
                  <div className='popup'>
                    <span className="region">{location.region}</span>
                    <img src={location.img} alt={location.title} />
                    <div className="popup-content">
                      <Link href='https://'
                        onClick={(e) => { e.preventDefault();
                        onMarkerClick(location); }}>
                          {location.title}
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapWithPins;