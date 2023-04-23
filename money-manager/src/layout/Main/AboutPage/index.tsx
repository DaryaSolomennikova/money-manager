import React, { useState } from "react";
import LoginForm from "../LoginForm";
import "./style.css"

interface AboutPageProps {
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutPage: React.FC<{ showLoginForm: boolean; setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showLoginForm, setShowLoginForm }) => {
  const [isMainContentVisible, setIsMainContentVisible] = useState(true);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleLoginBtnClick = () => {
    setIsMainContentVisible(false);
  };
  return (
    <div className="about">
       {showLoginForm && (
        <LoginForm onLogin={() => {}} onClose={handleLoginFormClose} />
      )}
    <div className={`about-content ${showLoginForm ? "none" : ""}`}>
      <h1>В разработке...</h1>
    </div>
    </div>
  );
};

export default AboutPage;