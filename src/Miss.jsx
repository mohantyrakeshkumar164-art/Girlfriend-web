import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Miss.css"
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function Miss() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We will save this to Firebase later

  //   navigate("/firstimpression");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "Whenever you miss me, what do you do?",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/firstimpression");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>💭</h1>

        <h2>When do you miss me the most? ❤️</h2>

        <p className="message">
          Write whatever comes from your heart. 💖
        </p>

        <textarea
          rows="6"
          placeholder="Write your answer here..."
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

export default Miss;