import './scss/main.scss';
import React from 'react';
import Menu from './components/Menu.js';
import SearchResults from './components/SearchResults.js';

function App() {

  return (
    <div>
      <Menu/>
      <SearchResults />
    </div>
  );
}

export default App;

