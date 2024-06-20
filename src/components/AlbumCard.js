// src/components/AlbumCard.js
import { Link } from 'react-router-dom';
import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={artist}
      />
      
      <Link to={`/album/${id}`}>
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={name}
        

      />
      </Link>
    </Card>
  );
};

export default AlbumCard;
