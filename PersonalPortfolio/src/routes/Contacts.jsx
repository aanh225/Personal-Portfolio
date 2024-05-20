import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Grid, TextField, Box } from '@mui/material';

export const Contacts = () => {
  return (
    <Grid container>
        <Grid item xs={12}>
        <AppBar position="static">
            <Toolbar>
            <h1 style={{ flexGrow: 1 }}>Contact Me</h1>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            </Toolbar>
        </AppBar>
    </Grid>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              id="firstName"
              label="First Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="lastName"
              label="Last Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="email"
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit Message
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
