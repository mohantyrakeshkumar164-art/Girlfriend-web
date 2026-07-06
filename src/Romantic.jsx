import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function Romantic() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We will save this answer to Firebase later

  //   navigate("/proposal");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "When your mood is romantic, what would you like to do with me? ❤️",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/final");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>🥰</h1>

        <h2>
          When you're feeling romantic,
          <br />
          what would you like to do with me? ❤️
        </h2>

        <p className="message">
          Write anything you want from your heart. 💖
        </p>

        <textarea
          rows="6"
          placeholder="Tell me your thoughts..."
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

export default Romantic;