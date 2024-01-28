import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React, { useCallback, useMemo, useState } from "react";

const containerStyle = {
  width: "560px",
  height: "500px",
  margin: '40px'
};



const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({
    lat: 40.6868,
    lng: -73.9557
  }), []);

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: 40.6868, lng: -73.955 }}></Marker>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

// export default React.memo(Map);
