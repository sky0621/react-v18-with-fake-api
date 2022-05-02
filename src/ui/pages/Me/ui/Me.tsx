import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';

const Me: React.FC = () => {
  //
  console.log('Me');
  const title = 'Me';
  const posts = ['aaaaaaaaaaaaaaaaaaaaaaaa'];

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div key={post.substring(0, 40)}>{post}</div>
      ))}
    </Grid>
  );
};

export default Me;
