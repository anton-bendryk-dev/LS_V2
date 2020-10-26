import React from 'react';
import Header from './header/header'
import './style/App.sass';
import Main from './main/main';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
