import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Kangacook Recipe Book</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'rgb(171 207 106)',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header;
