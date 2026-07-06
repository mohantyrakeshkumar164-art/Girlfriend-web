import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function FallLove() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We'll save this answer to Firebase later

  //   navigate("/romantic");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "Which moment made you fall in love with me?",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/romantic");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>🌹</h1>

        <h2>Which moment made you fall in love with me? ❤️</h2>

        <p className="message">
          I'd love to know the moment your heart chose me. 💖
        </p>

        <textarea
          rows="6"
          placeholder="Tell me that special moment..."
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

export default FallLove;