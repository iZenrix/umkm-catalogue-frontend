import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleSearch = () => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Ganti dengan API Key Anda
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    fetch(geocodeUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const location = data.results[0].geometry.location;
          setCoordinates(location); // Menyimpan koordinat hasil geocode
        } else {
          alert("Alamat tidak ditemukan.");
        }
      })
      .catch(error => console.error("Geocoding gagal:", error));
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Masukkan alamat"
      />
      <button onClick={handleSearch}>Cari Alamat</button>

      {coordinates && (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            center={coordinates}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '400px' }}
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Maps;
