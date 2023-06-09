import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Quote.css';

const Quote = ({ category }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'L7ccePRJtblcwCdcxejoLg==29ApcUrnLJdygfEA',
            },
          },
        );
        const data = await response.json();
        const { quote, author } = data[0];
        setQuote(quote);
        setAuthor(author);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchQuote();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching quote.</p>;
  }

  return (
    <div>
      <p>
        &quot;
        {quote}
        &quot;
      </p>
      <p>{author}</p>
    </div>
  );
};

Quote.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Quote;
