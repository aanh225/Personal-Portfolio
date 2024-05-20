import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Card, CardContent, Grid, AppBar, Toolbar, Button } from '@mui/material';

export const About = () => {
  const sections = [
    {
      title: "Recent courses I have taken...",
      content: ["The Structure & Interpretation of Computer Programs", "Data Structures & Algorithms", "Calculus", "Linear Algebra", "Intro to Programming"]
    },
    {
      title: "My Technical Skills include...",
      content: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "React", "APIs", "Figma", "Adobe Express", "UI/UX Design", "Material-UI", "Node.js", "Git", "TypeScript"]
    },
    {
      title: "Clubs I'm involved in...",
      content: ["Society of Women Engineers", "Computer Science Kickstart", "Girls Who Code"]
    }
  ];

  return (
    <Grid container>
        <Grid item xs={12}>
        <AppBar position="static">
            <Toolbar>
            <h1 style={{ flexGrow: 1 }}> About Me</h1>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            </Toolbar>
        </AppBar>
    </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" sx={{ my: 4 }}>
          <p> I am a second-year student at UC Berkeley majoring in Computer Science and minoring in Data Science. 
              I enjoy reading, scrapbooking, digital design, and photography.</p>
          {sections.map((section, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <h2>{section.title}</h2>
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
};

