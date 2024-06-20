import React from 'react';
import { Grid } from '@mui/material';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums';
import { Link } from 'react-router-dom';
import { Card, CardActionArea} from '@mui/material';

function AlbumOverview() {
  const albums = useAlbums();
  console.log(albums);
  return (
    <div>
      <h2>Album Overview</h2>
      <Card>
            <CardActionArea component={Link} to="/new">
                <p>Nieuwe aanmaken? Klik dan hier op</p>
            </CardActionArea>
        </Card>

      {albums.map((album) => (
        <Grid item xs={2}   key={album.id}>
          <AlbumCard id={album.id} name={album.name} artist={album.artist} imageUrl={album.imageUrl} />
        </Grid>
      ))}
      <p>gittest</p>
    </div>
  );
}

export default AlbumOverview;
