import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function FirstImpression() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We will save this answer in Firebase later

  //   navigate("/food");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "What was your first impression of me?",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/food");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>😊</h1>

        <h2>What was your first impression of me? ❤️</h2>

        <p className="message">
          I'd love to know what you thought about me when we first met. 💖
        </p>

        <textarea
          rows="6"
          placeholder="Tell me your first impression..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={handleNext}>
          Next ❤️
        </button>

      </div>
    </div>
  );
}

export default FirstImpression;