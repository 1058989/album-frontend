import React from 'react';
import AlbumForm from './AlbumForm';
import { useNavigate } from 'react-router-dom';
const CreateAlbum = () => {

    const navigate = useNavigate();
    const handleSubmit = (newAlbum) => {
        const endpoint = `${process.env.REACT_APP_API_URL}/albums`;
        console.log(newAlbum);
        const request = fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(newAlbum),
          headers: { "Content-Type": "application/json" },
        });
      
        request.then((response) => {
          if (!response.ok) {
            console.error(response.statusText);
          } else {
            navigate("/");
          }
        });
      };
    return (
        <div>
            <h2>Create Album</h2>
            <AlbumForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateAlbum;
