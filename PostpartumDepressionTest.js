import React, { useState } from "react";

const PostpartumDepressionTest = () => {
  const [responses, setResponses] = useState(Array(10).fill(5)); // Default value 5 for sliders

  // List of questions
  const questions = [
    "I feel overwhelmed by my responsibilities as a parent.",
    "I feel sad or down most of the time.",
    "I find it difficult to bond with my baby.",
    "I experience a lack of energy or fatigue.",
    "I feel anxious or overly worried about my baby's wellbeing.",
    "I feel like I'm failing as a parent.",
    "I experience sudden mood swings or irritability.",
    "I have trouble sleeping, even when my baby is asleep.",
    "I feel disconnected from my partner or family.",
    "I have thoughts of harming myself or my baby."
  ];

  // Handle slider value change
  const handleSliderChange = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted responses:", responses);
    alert("Your responses have been submitted!");
    // Add logic to send responses to the backend or database here
  };

  return (
    <div style={{ backgroundColor: "#B6FCD2", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Postpartum Depression Test</h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Please respond to the following questions by sliding the scale.
      </p>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#B6FCD2", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px", color: "#333" }}>
              {index + 1}. {question}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={responses[index]}
              onChange={(e) => handleSliderChange(index, e.target.value)}
              style={{ width: "100%" }}
            />
            <p style={{ textAlign: "right", marginTop: "5px", color: "#666" }}>
              Value: {responses[index]}
            </p>
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostpartumDepressionTest;
