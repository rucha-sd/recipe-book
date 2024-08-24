import React from 'react';
import MenuItem from './MenuItem';

function MenuList(menuItems) {

  console.log(menuItems.items)


  return (
    <div style={styles.menuList}>
      {menuItems.items.length > 0 ? (
        menuItems.items.map((item) => <MenuItem key={item.id} item={item} />)
      ) : (
        <p style={styles.noItems}>No items available in this category.</p>
      )}
      
    </div>
  );
}

const styles = {
  menuList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  },
  noItems: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
};

export default MenuList;
