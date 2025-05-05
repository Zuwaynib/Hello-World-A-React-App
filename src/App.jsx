import React from 'react';
import Article from './components/Article.jsx';

const App = () => {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="Logo" />
        <h1>Learning React</h1>
        <Article />
      </nav>
    </header>
  )
}

export default App;
