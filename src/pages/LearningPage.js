import React from "react";
import "../styles/pages.css";
import { Link } from "react-router-dom";

const LearningPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Choose Study Mode</h1>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <Link to="/learn">
              <button className="study-mode-btn big-btn">Learn</button>
            </Link>
            <div className="mode-desc">Study at your own pace and review material freely.</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="study-mode-btn big-btn">Timed</button>
            <div className="mode-desc">Challenge yourself with a timed session for quick recall.</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="study-mode-btn big-btn">Mock</button>
            <div className="mode-desc">Simulate a real test environment to assess your knowledge.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
