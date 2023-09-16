import { API_KEY } from "../APIKEY";

const MapTest = ({ destination }: { destination: string | undefined }) => {
  const zoom = 12;

  return (
    <iframe
      width="600"
      height="600"
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${destination}&zoom=${zoom}`}
    ></iframe>
  );
};

export default MapTest;
