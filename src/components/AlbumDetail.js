import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';
import { useNavigate } from 'react-router-dom';

function AlbumDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const album = useAlbum(id);
    AlbumForm(album);
    console.log(album);

    const handleDelete = () => {
        const endpoint = `${process.env.REACT_APP_API_URL}/albums/${id}`;
        const request = fetch(endpoint, {
            method: 'DELETE'
        });

        request.then((response) => {
            if (!response.ok) {
                console.error(response.statusText);
            } else {
                navigate("/AlbumOverview");
            }
        });
    };

    
    const updateAlbum = (newAlbum) => {
        const endpoint = `${process.env.REACT_APP_API_URL}/albums/${id}`;
        console.log(newAlbum);
        const request = fetch(endpoint, {
          method: "PUT",
          body: JSON.stringify({
            id: album.id, // Ensure id is included in the request body
            ...newAlbum,
        }),
          headers: { "Content-Type": "application/json" },
        });
      
        request.then((response) => {
          if (!response.ok) {
            console.error(response.statusText);
          } else {
            navigate("/AlbumOverview");
          }
        });
      };
    return (
        <div>

             <AlbumForm album={album}  onSubmit={updateAlbum} onRemove={handleDelete} />
            <Link to="/AlbumOverview">
                Go back
            </Link>
        </div>
    );
}

export default AlbumDetail;
