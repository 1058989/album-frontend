// src/components/AlbumCard.js

import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={artist}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={name}
      />
    </Card>
  );
};

export default AlbumCard;
