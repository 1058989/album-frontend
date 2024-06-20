import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AlbumForm = ({ album, onSubmit, onRemove }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: album
      ? album
      : {
        name: '',
        artist: '',
        imageUrl: '',
      },
  });
  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };
  useEffect(() => {
    if (album) {
      reset(album);
    }
  }, [album, reset]);

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Naam"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Artiest"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Afbeelding URL"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
          />
          {onSubmit && <button type="submit">Submit</button>}
          {onRemove && <button type="button" onClick={handleRemove}>Remove Album</button>}
        </form>

      </CardContent>
    </Card>
  );
};

export default AlbumForm;
