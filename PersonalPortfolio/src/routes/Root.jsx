import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, Grid } from '@mui/material';
import { db } from '../firebase.js';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export const Root = () => {
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const responseRef = collection(db, 'responses', 'question1', 'answers');
        const querySnapshot = await getDocs(responseRef);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setResponses(data);
      } catch (error) {
        console.error("Error getting responses: ", error);
      }
    };

    fetchResponses();
  }, []);

  const submitResponse = async () => {
    try {
      const responseRef = collection(db, 'responses', 'question1', 'answers');
      await addDoc(responseRef, {
        spot: response,
        numUpvotes: 0
      });
      console.log("Response submitted successfully");
      setResponse('');
      
      const querySnapshot = await getDocs(responseRef);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResponses(data);
    } catch (error) {
      console.error("Error submitting response: ", error);
    }
  };

  const upvote = async (answerId) => {
    try {
      const answerRef = doc(db, 'responses', 'question1', 'answers', answerId);
      await updateDoc(answerRef, {
        numUpvotes: firebase.firestore.FieldValue.increment(1)
      });
      console.log("upvoted successfully");

      const responseRef = collection(db, 'responses', 'question1', 'answers');
      const querySnapshot = await getDocs(responseRef);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResponses(data);
    } catch (error) {
      console.error("error upvoting: ", error);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <h1 style={{ flexGrow: 1 }}>Welcome!</h1>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contacts</Button>
            <Button color="inherit">Projects</Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ mt: 2 }}>
          <h2>Hi, it's so nice to meet you!</h2>
          <p>My name is Anh Nguyen. Get to know me better.</p>
          <h3>What's your favorite food spot?</h3>
          <input type="text" value={response} onChange={(e) => setResponse(e.target.value)} placeholder="Your response..." />
          <button onClick={submitResponse}>Submit</button>
          <div>
            {responses.map((response) => (
              <div key={response.id}>
                <p>{response.spot}</p>
                <p>Upvotes: {response.numUpvotes}</p>
                <button onClick={() => upvote(response.id)}>Upvote</button>
              </div>
            ))}
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};
