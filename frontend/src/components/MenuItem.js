import React from 'react';
import { useState, useEffect } from 'react';
import RecipeDetail from './RecipeDetail';

function MenuItem({ item }) {
    const [showRecipe, setShowRecipe] = useState(false);

  const handleViewRecipe = () => {
    setShowRecipe(true);
  };

  const handleCloseRecipe = () => {
    setShowRecipe(false);
  };

  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button
        style={styles.button}
        onClick={handleViewRecipe}
      >View Recipe
      </button>
      {showRecipe && <RecipeDetail name={item.name} onClose={handleCloseRecipe} />}
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',                 
    flexDirection: 'column',         
    justifyContent: 'space-between', 
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  price: {
    fontWeight: 'bold',
    color: '#ff6347',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff6347',   
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin : '0.75em auto 0.5em auto',
    maxWidth : '75%'
  },
  buttonHover: {
    backgroundColor: '#e5533d',  
  },
};

export default MenuItem;
