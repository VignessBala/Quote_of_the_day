import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@material-ui/core';

const Home = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quotes/random')
      .then(response => setQuote(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      {quote ? (
        <div>
          <Typography variant="h4" gutterBottom>Quote of the Day</Typography>
          <Typography variant="body1">{quote.text}</Typography>
          <Typography variant="subtitle1"><i>- {quote.author}</i></Typography>
        </div>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Home;
