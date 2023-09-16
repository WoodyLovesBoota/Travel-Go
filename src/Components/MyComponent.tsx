import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { API_KEY } from "../APIKEY";

const containerStyle = {
  width: "90%",
  height: "600px",
};

const center = {
  lat: 37.5649867,
  lng: 126.985575,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
  zoom: 12,
};

const MyComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MyComponent);
