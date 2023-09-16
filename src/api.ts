import { API_KEY } from "./APIKEY";
import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/";
const CORS = "https://cors-anywhere.herokuapp.com/";
export interface IGetPlaceResult {
  candidates: [
    {
      formatted_address: string;
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
      name: string;
    }
  ];
  status: string;
}

export const getPlaceResult = async (keyword: string | undefined) => {
  return await axios
    .get(
      `api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Cgeometry&key=${API_KEY}`
    )
    .then((res) => res.data);
};

// export const getPlaceResult = async (keyword: string | undefined) => {
//   return (
//     await fetch(
//       `api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Cgeometry&key=${API_KEY}`
//     )
//   ).json();
// };
