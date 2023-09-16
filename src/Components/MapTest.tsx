import { API_KEY } from "../APIKEY";

const MapTest = () => {
  const center = [0, 0];
  const zoom = 15;
  const place = "경복궁";
  return (
    <iframe
      width="600"
      height="600"
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${place}&zoom=${zoom}`}
    ></iframe>
  );
};

export default MapTest;
