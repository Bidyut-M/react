import React, { useState } from "react";

const EatingDisorderTest = () => {
  // Questions for the test
  const questions = [
    "Do you feel preoccupied with food, weight, or body shape?",
    "Do you often feel guilt or shame after eating?",
    "Do you avoid eating in public due to fear of judgment?",
    "Do you frequently weigh yourself or check your body in mirrors?",
    "Do you experience a lack of control when eating?",
    "Do you restrict food intake to influence your weight or body shape?",
    "Do you feel distressed about your eating habits?",
    "Do you engage in excessive exercise to compensate for eating?",
    "Do you experience physical symptoms like fatigue, dizziness, or hair loss?",
    "Do you often compare your body to others or feel dissatisfied with it?",
  ];

  // State to track slider values
  const [responses, setResponses] = useState(
    Array(questions.length).fill(5) // Default slider value is 5 for each question
  );

  // Handle slider value change
  const handleSliderChange = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = parseInt(value, 10);
    setResponses(updatedResponses);
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Submitting responses:", responses);

    try {
      const response = await fetch("http://localhost:3000/api/eating-disorder-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Responses submitted successfully!");
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting responses:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#B6FCD2", // Background color
        minHeight: "100vh", // Full page height
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Eating Disorder Test</h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Please answer the following questions by sliding the bar to indicate your response.
      </p>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <p>
              <strong>Q{index + 1}: </strong>
              {question}
            </p>
            <input
              type="range"
              min="1"
              max="10"
              value={responses[index]}
              onChange={(e) => handleSliderChange(index, e.target.value)}
              style={{
                width: "100%",
                height: "10px",
                background: "linear-gradient(to right, green, yellow, orange, red)",
                borderRadius: "5px",
                outline: "none",
                appearance: "none",
                marginTop: "10px",
              }}
            />
            <p>Response: {responses[index]}</p>
          </div>
        ))}
      </div>
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
  );
};

export default EatingDisorderTest;
