import React from 'react';
import './App.css';
import './global.scss'
import { Provider } from 'react-redux';
import store from './redux/store';
import CatFacts from './components/CatFacts';
import FavoriteFacts from './components/FavoriteFacts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatFacts />
        <FavoriteFacts />
      </div>
    </Provider>
  );
}

export default App;
