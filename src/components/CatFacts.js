import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/favoriteSlice';

const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const dispatch = useDispatch();

  const fetchFacts = () => {
    axios
      .get('https://meowfacts.herokuapp.com/?count=5')
      .then((response) => {
        setFacts(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching cat facts:', error);
      });
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const handleAddToFavorites = (fact) => {
    dispatch(addToFavorites(fact));
  };
  
  return (
    <div className='cat-facts'>
      <h2>Cat Facts</h2>
      <button onClick={fetchFacts}>Refresh</button>
      <ul>
        {facts.map((fact, index) => (
          <li key={index} onClick={() => handleAddToFavorites(fact)}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatFacts;
