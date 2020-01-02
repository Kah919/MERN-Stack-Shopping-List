import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux'; // we can now access state from our component
import store from './store';
import ItemModal from './components/itemModal'
import { Container } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
        
      </>
    </Provider>
  );
}

export default App;
