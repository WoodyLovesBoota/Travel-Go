import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { API_KEY } from "../APIKEY";

const MapComponent = () => {
  const cordinates = { lat: 37.5649867, lng: 126.985575 };
  return (
    <Div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
      ></GoogleMapReact>
    </Div>
  );
};

export default MapComponent;

const Div = styled.div`
  width: 500px;
  height: 500px;
`;
