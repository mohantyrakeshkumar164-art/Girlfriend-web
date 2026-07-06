import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Love.css"
import { db } from "./firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
function Love() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleNo = async () => {
    try {
      await addDoc(collection(db, "answers"), {
        question: "Do you love me?",
        answer: "No",
        createdAt: new Date(),
      });
  
      setMessage("🥺 I know you do... maybe you're just teasing me. ❤️");
    } catch (error) {
      console.error(error);
      alert("Failed to save the answer.");
    }
  };

  return (
    <div className="page">

      <div className="card">

        <h1>❤️</h1>

        <h2>Do you love me?</h2>

        <p>
          Answer honestly 😊
        </p>

        <div className="buttons">

          <button
            className="yes-btn"
            onClick={async () => {
              try {
                await addDoc(collection(db, "answers"), {
                  question: "Do you love me?",
                  answer: "Yes",
                  createdAt: new Date(),
                });
            
                navigate("/like");
              } catch (error) {
                console.error(error);
                alert("Failed to save the answer.");
              }
            }}
          >
            ❤️ YES
          </button>

          <button
            className="no-btn"
            onClick={handleNo}
          >
            🤍 NO
          </button>

        </div>

        <p className="love-message">
          {message}
        </p>

      </div>

    </div>
  );
}

export default Love;