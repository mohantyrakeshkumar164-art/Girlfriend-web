import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Like.css"
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
function Like() {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {
  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We'll save this answer to Firebase later
  //   navigate("/miss");
  // };
  const saveLikeAnswer = async () => {
    try {
      await setDoc(
        doc(db, "responses", "hemangini"),
        {
          like: answer,
        },
        { merge: true }
      );
  
      navigate("/miss");
    } catch (error) {
      console.error(error);
      alert("Failed to save answer");
    }
  };
  return (
    <div className="page">
      <div className="card">

        <h1>🥰</h1>

        <h2>What do you like most about me? ❤️</h2>

        <textarea
          rows="6"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={saveLikeAnswer}>
          Next ❤️
        </button>

      </div>
    </div>
  );
}

export default Like;