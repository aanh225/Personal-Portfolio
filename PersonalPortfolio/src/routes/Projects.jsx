import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Card, CardContent, Button, Grid, AppBar, Toolbar } from '@mui/material';


export const Projects = () => {
  const projects = [
    {
      title: "World Generation Game",
      bulletpoint1: "Established interactive 2D tile-based exploration game with loading and saving of game state using Java and the StdDraw Library",
      bulletpoint2: "Implemented complete UI elements such as dynamic game rendering and HUD for user movement and object interaction",
      bulletpoint3: "Optimized performance, reducing lag by 25%; conducted user testing, leading to a 40% reduction in bugs and game stability",
      link: "https://github.com/aanh225/WorldGenerationGame"
    },
    {
      title: "NGrams",
      bulletpoint1: "Implemented a Java backend system to analyze a 300 MB word usage dataset; improved data management and retrieval by 62%",
      bulletpoint2: "Optimized data management techniques with data structures, reducing memory usage by 20% and ensuring efficient processing.",
      bulletpoint3: "Built a custom algorithm to enhance the parsing efficiency of large text datasets, enabling real-time data analysis",
      link: "https://github.com/aanh225/NGrams"
    },
    {
      title: "Game of Hog",
      bulletpoint1: "- Designed and implemented a robust scoring system in Python, allowing accurate point calculation and integration of game system",
      bulletpoint2: "- Developed probability calculations and decision-making algorithms using higher-order functions, enhancing strategic play",
      bulletpoint3: "- Utilized JUnit Testing to rigorously test functions, identifying and resolving 100% of bugs before release, improving game quality",
      link: "https://github.com/aanh225/Game-of-Hog"
    }
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
            <Toolbar>
            <h1 style={{ flexGrow: 1 }}>My Projects</h1>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            </Toolbar>
        </AppBar>
    </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <h2>{project.title}</h2>
                <p>{project.bulletpoint1}</p>
                <p>{project.bulletpoint2}</p>
                <p>{project.bulletpoint3}</p>
                <Button variant="contained" color="primary" href={project.link} target="_blank" rel="noopener">
                  View GitHub Repository
                </Button>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
};
