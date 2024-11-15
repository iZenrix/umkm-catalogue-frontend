import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

const MapInput = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);
  const mapRef = useRef();

  // Handle locating user
  const handleLocate = () => {
    const map = mapRef.current;
    if (map) {
      map.locate();
    }
  };

  // Set up location found event
  const MapClickHandler = () => {
    const map = useMapEvents({
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        onLocationSelect({ lat, lng });
      },
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        onLocationSelect({ lat, lng });
      },
    });
    mapRef.current = map; // Simpan referensi ke map
    return null;
  };

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <>
      <MapContainer center={[-7.2531433, 112.7509539]} zoom={13} style={{ height: '20rem', width: '100%', zIndex: 2 }} whenCreated={mapInstance => (mapRef.current = mapInstance)}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {position && (
          <Marker
            position={position}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const marker = e.target;
                const { lat, lng } = marker.getLatLng();
                setPosition([lat, lng]);
                onLocationSelect({ lat, lng });
              }
            }}
            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
          >
            <Popup>
              {`your location is in latitude : ${position[0]} and longitude : ${position[1]}`}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="button-wrapper flex justify-end w-full">
        <button type='button' className='button-find-location bg-secondary-600 text-white px-4 py-2 rounded-lg mt-4' onClick={handleLocate}>Find My Location</button>
      </div>
    </>
  );
};

export default MapInput;
