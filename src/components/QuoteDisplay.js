import './Quote.css';
import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = 'jr0tU0nGnD2M7zd11ivtyw==k5fmqysgvHiEBZB4';
  const category = 'future';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setQuote(data[0].quote);
          setLoading(false);
        } else {
          setError('No quotes found for the specified category.');
          setLoading(false);
        }
      })
      .catch(() => {
        setError('An error occurred while fetching the quote.');
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="display-quote">
      <h2>Quote of the Day</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <p>{quote}</p>}
    </div>
  );
};

export default QuoteDisplay;
