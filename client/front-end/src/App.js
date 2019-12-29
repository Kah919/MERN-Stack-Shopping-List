import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';

import './App.css';

function App() {
  return (
    <>
      <AppNavBar />
      <ShoppingList />
    </>
  );
}

export default App;
