import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function Food() {

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  // const handleNext = () => {

  //   if (answer.trim() === "") {
  //     alert("Please write your answer ❤️");
  //     return;
  //   }

  //   // We will save this answer in Firebase later

  //   navigate("/place");

  // };
  const handleNext = async () => {

    if (answer.trim() === "") {
      alert("Please write your answer ❤️");
      return;
    }
  
    try {
  
      await addDoc(collection(db, "answers"), {
        question: "What do you want to eat with me?",
        answer: answer,
        createdAt: new Date(),
      });
  
      navigate("/place");
  
    } catch (error) {
  
      console.log(error);
      alert("Failed to save answer.");
  
    }
  
  };
  return (
    <div className="page">

      <div className="card">

        <h1>🍕</h1>

        <h2>What do you want to eat with me? ❤️</h2>

        <p className="message">
          Tell me your favorite food for our next date. 😋
        </p>

        <textarea
          rows="6"
          placeholder="Write your favorite food..."
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

export default Food;