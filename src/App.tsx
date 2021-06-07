import React from 'react';
import BookList from "./components/BookList";
import Search from "./components/Search";
import './css/index.css'

function App() {
  return (
    <div className="App">
        <Search/>
        <BookList/>
    </div>
  );
}

export default App;
