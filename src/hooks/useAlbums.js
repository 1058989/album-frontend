import { useEffect, useState } from "react";

const endpoint = `${process.env.REACT_APP_API_URL}/albums`;
console.log("hey endpoitnt:" + endpoint);
const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const request = fetch(endpoint);

    request
      .then((apiResponse) => {
        if (!apiResponse.ok) {
          console.error(apiResponse.statusText);
          return;
        }

        return apiResponse.json();
      })
      .then((apiResult) => {
        console.log(apiResult);
        setAlbums(apiResult);
      });
  }, []);

  return albums;
};

export default useAlbums;