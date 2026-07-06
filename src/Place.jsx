import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function Place() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We will save this answer in Firebase later

  //   navigate("/fall-love");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "Which place do you want to visit with me?",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/fall-love");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>✈️</h1>

        <h2>Which place do you want to visit with me? ❤️</h2>

        <p className="message">
          Tell me your dream destination 🌍. it's may be our honeymoon
        </p>

        <textarea
          rows="6"
          placeholder="Write your dream place..."
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

export default Place;