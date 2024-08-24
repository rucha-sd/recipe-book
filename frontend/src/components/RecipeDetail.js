import React, { useState, useEffect } from 'react';

function RecipeDetail({ name, onClose }) {
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState(null)
  const [instructions, setInstructions] = useState(null)

  useEffect(() => {
    // Fetch the data from the API using the name as the lookup
    fetch(`http://localhost:8000/api/menu/${encodeURIComponent(name)}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRecipeData(data);
        const parsedRecipe = JSON.parse(data.recipe);
        setIngredients(parsedRecipe.ingredients)
        setInstructions(parsedRecipe.instructions)
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={styles.recipeContainer}>
      <div style={styles.recipeContent}>
        <img src={recipeData.image} alt={recipeData.name} style={styles.recipeImage} />
        <div style={styles.recipeDetails}>
          <h2>{recipeData.name}</h2>
          <p>{recipeData.description}</p>
          <h3>Ingredients</h3>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width:'50%'}}>
                    <ul>
                        {ingredients.slice(0, Math.ceil(ingredients.length/2)).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div style={{width:'50%'}}>
                    <ul>
                        {ingredients.slice(Math.ceil(ingredients.length/2)).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <h3>Instructions</h3>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                    ))}
            </ol>
            
          <button onClick={onClose} style={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  recipeContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  recipeContent: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    maxWidth: '80%',
    maxHeight : '80%',
    width: '100%',
  },
  recipeImage: {
    width: '40%',
    borderRadius: '10px',
    marginRight: '20px',
  },
  recipeDetails: {
    width: '80%',
    textAlign :'left',
    display : 'flex',
    flexDirection : 'column',
  },
  closeButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff6347',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: 'auto',
    marginLeft:'80%'
  },
};

export default RecipeDetail;
