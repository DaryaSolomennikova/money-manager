import React, { useState } from 'react';
import Header from '../../layout/Header';
// import './App.css';
import ServicePage from '../../layout/Main/ServicePage';

const Services: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div>
    <Header setShowLoginForm={setShowLoginForm} />
    <ServicePage showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
    </div>
  )
}

export default Services;