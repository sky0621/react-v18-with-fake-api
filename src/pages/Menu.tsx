import React, { useState } from 'react';
import { Tab, Tabs, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBar from 'shared/ui/AppBar';

const Menu: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, i: number) => {
    setIndex(i);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={index} onChange={handleChange}>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Album" component={Link} to="/albums" />
          <Tab label="Comment" component={Link} to="/comments" />
          <Tab label="Photo" component={Link} to="/photos" />
          <Tab label="Post" component={Link} to="/posts" />
          <Tab label="Todo" component={Link} to="/todos" />
          <Tab label="User" component={Link} to="/users" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
