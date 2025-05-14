import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: require('../../images/map-pin-icon.png'),
  iconSize: [45, 45],
  iconAnchor: [22, 40],
  popupAnchor: [0, -41],
});

const AuctionMap = (location) => {

  const createClusterCustomIcon = function () {
    return L.divIcon({
      className: 'custom-marker-cluster',
      iconSize: L.point(50, 50, true),
    });
  };
  
  return (
    <MapContainer center={[location.latitude, location.longitude]} zoom={10}
        style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            borderRadius: '7px',
            zIndex: '1'
        }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        
        <MarkerClusterGroup
            iconCreateFunction={createClusterCustomIcon}
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={false}
            zoomToBoundsOnClick={true}
            maxClusterRadius={40}>
            
            <Marker
                key={location.id}
                position={[location.latitude, location.longitude]}
                icon={customIcon}
                >
            </Marker>
        </MarkerClusterGroup>
    </MapContainer>
  );
};

export default AuctionMap;