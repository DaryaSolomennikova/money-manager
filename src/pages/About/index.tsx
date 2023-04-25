import React, { useState } from 'react';
import Header from '../../layout/Header';
import AboutPage from '../../layout/Main/AboutPage';

const About: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div>
    <Header setShowLoginForm={setShowLoginForm} />
    <AboutPage showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
    </div>
  );
}

export default About;
