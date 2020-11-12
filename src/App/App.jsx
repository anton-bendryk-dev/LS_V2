import React from 'react';
import './style/App.sass';
import ArrowTop from './arrowTop/arrowTop';
import Header from './header/header'
import Main from './main/main';
import Footer from './footer/footer'
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <ArrowTop/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
