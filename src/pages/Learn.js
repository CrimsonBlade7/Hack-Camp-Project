import React from "react";
import "../styles/pages.css";
import Gemini from "../components/Gemini";

const Learn = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Learn Mode</h1>
        <p>Welcome to Learn Mode! Here you can study at your own pace and review material freely.</p>
        <div style={{ marginTop: '2rem' }}>
          <Gemini />
          <div style={{ marginTop: '1.5rem', color: '#4449b7', fontWeight: 500 }}>
            <p>To get started, ask Gemini to read your uploaded file and generate topics to learn. For example:</p>
            <p><em>"Read my uploaded file and create a list of topics to learn from it."</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
