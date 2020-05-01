import React from 'react';
import './App.css';
import { AppRoute } from './Routing/routes';

function App() {
  return (
    <>
      <div className='App-header'>
        <h1>TIC TAC TOE</h1>
        <AppRoute />
      </div>
    </>
  );
}

export default App;
