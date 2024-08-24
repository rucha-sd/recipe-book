import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import MenuList from './components/MenuList';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/menu/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {

        setMenuItems(data);

        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);

        setFilteredItems(data);
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  useEffect(() => {
  

    const itemsToDisplay =
      selectedCategory === 'All'
        ? menuItems
        : menuItems.filter((item) => item.category === selectedCategory);
    
    setFilteredItems(itemsToDisplay);

  }, [selectedCategory, menuItems]);

  return (
    <div>
      <Header />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {filteredItems.length > 0 ? <MenuList items={filteredItems} /> : <></>}
    </div>
  );
}

export default App;
