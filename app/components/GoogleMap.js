"use client"
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 25.63883993703016,
  lng: -80.42337511866037,
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
  });



  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
    >
      {/* Add the Marker component */}
      <Marker
        position={center}
        icon="/pin.png"
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(SimpleMap);



  