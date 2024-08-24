import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={styles.filterContainer}>
      <button
        style={selectedCategory === 'All' ? styles.activeButton : styles.button}
        onClick={() => onSelectCategory('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          style={selectedCategory === category ? styles.activeButton : styles.button}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const styles = {
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activeButton: {
    padding: '10px 20px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CategoryFilter;
