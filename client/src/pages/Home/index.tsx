import React, { useState } from 'react';
import Header from '../../layout/Header';
import "react-router-dom";
import Main from '../../layout/Main';
import '../../App.css';

const Home: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="Home">
      <Header setShowLoginForm={setShowLoginForm} />
      <Main showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
    </div>
  );
};

export default Home;