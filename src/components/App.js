import React from 'react';
import '../css/App.scss';
import Navigation from '../components/Navigation';
import MainContainer from '../components/MainContainer';

const App =() =>{
  return (
    <div className="App">
      <Navigation/>
      <MainContainer/>
    </div>
  );
}

export default App;
