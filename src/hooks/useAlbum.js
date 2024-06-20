import { useEffect, useState } from "react";


const useAlbum = (id) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/albums/${id}`;
    console.log("hey endpoint:" + endpoint);
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
    }, [endpoint]);

    return albums;
};

export default useAlbum;