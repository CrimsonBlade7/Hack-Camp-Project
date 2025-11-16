import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages.css";
import { useFile } from "../context/FileContext";

const GetStarted = () => {
  const [file, getFile] = useState(null);
  const navigate = useNavigate();
  const { setUploadedFile, setFileContent } = useFile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      // Handle file upload logic here
      console.log("File uploaded:", file.name);
      
      // Read file content
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setFileContent(content);
        setUploadedFile(file);
        console.log("File content loaded");
        // Redirect to LearningPage after upload
        navigate("/learningpage");
      };
      
      // Read as text for txt files, or as data URL for other formats
      if (file.type === "text/plain") {
        reader.readAsText(file);
      } else {
        reader.readAsText(file); // You may need to adjust this based on file type
      }
    }
  }
    return (
    <div className="page-container">
      <div className="page-content">
        <h1>Get Started</h1>
        <p className="subtitle">Upload your academic materials to begin!</p>
        <div style={{ textAlign: "center", margin: "1rem 0" }}>
          <Link to="/terms" style={{ color: "#4449b7", fontWeight: 600, textDecoration: "underline" }}>
            View Terms of Use
          </Link>
        </div>

        <form className="upload-form" onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={(e) => getFile(e.target.files[0])}
          />
          <button type="submit" disabled={!file}>
            Upload and Start Learning
          </button>
        </form>
      </div>
    </div>
  );
}       

export default GetStarted;