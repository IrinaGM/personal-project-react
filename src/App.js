import React from 'react';
import MainView from './Views/MainView';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainView />
      </div>
    </Provider>
  );
}

export default App;
