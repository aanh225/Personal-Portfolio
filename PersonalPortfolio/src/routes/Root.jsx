import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Grid } from '@mui/material';

export const Root = () => {
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case '/about':
        return 'About';
      case '/contacts':
        return 'Contacts';
      case '/projects':
        return 'Projects';
      default:
        return 'Home';
    }
  };

  return (
    <Grid container>
        <Grid item xs={12}>
        <AppBar position="static">
            <Toolbar>
            <h1 style={{ flexGrow: 1 }}>Welcome!</h1>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            </Toolbar>
        </AppBar>
    </Grid>
      <Grid item xs={12}>
        <Container sx={{ mt: 2 }}>
          <h2>Hi, it's so nice to meet you!</h2>
          <p>My name is Anh Nguyen. Get to know me better.</p>
        </Container>
      </Grid>
    </Grid>
  );
};
