import React from 'react';
import Header from '../../layout/Header';
import "react-router-dom";
import Main from '../../layout/Main/HomePage';
import '../../App.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
    </div>
  );
}

export default Home;