import React from 'react';
import './App.css';
import MainPageContainer from './components/mainPageContainer/mainPageContainer';

function App({match}) {
  return (
    <div className="App">
      <MainPageContainer match={match}></MainPageContainer>
    </div>
  );
}

export default App;
