import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Grid , TextField} from '@mui/material';
import { db } from '../firebase.js';
import { addDoc, getDoc, collection, getDocs } from 'firebase/firestore';

export const Root = () => {
  const location = useLocation();
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);
  const [newResponse, setNewResponse] = useState('');

  useEffect(() => {
    const fetchQuestionAndResponses = async () => {
      const questionDoc = await getDoc(doc(db, 'responses', 'question1'));
      if (questionDoc.exists()) {
        setQuestion(questionDoc.data().text);
      }

      const responsesSnapshot = await getDocs(collection(db, 'responses', 'question1', 'answers'));
      const responsesData = responsesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      responsesData.sort((a, b) => b.upvotes - a.upvotes);
      setResponses(responsesData);
    };

    fetchQuestionAndResponses();
  }, []);

  const handleSubmitResponse = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'responses', 'question1', 'answers'), {
      spot: newResponse,
      upvotes: 0
    });
    console.log("created doc with id: ", docRef.id);

    const responsesSnapshot = await getDocs(collection(db, 'responses', 'question1', 'answers'));
    const responsesData = responsesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    responsesData.sort((a, b) => b.upvotes - a.upvotes);
    setResponses(responsesData);
  };

  const handleUpvoteResponse = async (responseId) => {
    const responseRef = doc(db, 'responses', 'question1', 'answers', responseId);
    await updateDoc(responseRef, {
      upvotes: firebase.firestore.FieldValue.increment(1)
    });

    
    const responsesSnapshot = await getDocs(collection(db, 'responses', 'question1', 'answers'));
    const responsesData = responsesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    responsesData.sort((a, b) => b.upvotes - a.upvotes);
    setResponses(responsesData);
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
          <h3>{question}</h3>
          <form onSubmit={handleSubmitResponse}>
            <TextField
              label="what's your favorite food spot?"
              variant="outlined"
              fullWidth
              value={newResponse}
              onChange={(e) => setNewResponse(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">Submit Response</Button>
          </form>
          {responses.map(response => (
            <div key={response.id}>
              <h3>{response.spot} - number of upvotes: {response.upvotes}</h3>
              <Button variant="outlined" onClick={() => handleUpvoteResponse(response.id)}>upvote this choice</Button>
            </div>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
};
