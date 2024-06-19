import React from 'react';
import { Grid } from '@mui/material';
import AlbumCard from './AlbumCard'; 
import useAlbums from '../hooks/useAlbums';
const albums = [
  { id: 1, name: 'Album 1', artist: 'Artist 1' , imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg"},
  { id: 2, name: 'Album 2', artist: 'Artist 2', imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg" },
  { id: 3, name: 'Album 3', artist: 'Artist 3', imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg" },
];

function AlbumOverview() {
  const albums = useAlbums();
  console.log(albums);
  return (
    <div>
      <h2>Album test</h2>
      <p>alle album hierr wow</p>
        {albums.map((album) => (
          <Grid item xs={2} key={album.id}>
            <AlbumCard id={album.id} name={album.name} artist={album.artist} imageUrl={album.imageUrl} />
          </Grid>
        ))} 

    </div>
  );
}

export default AlbumOverview;
 