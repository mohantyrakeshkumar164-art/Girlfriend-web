import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Proposal() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleYes = () => {
    navigate("/final");
  };

  const handleNo = () => {
    setMessage(
      "❤️ No matter what, Rakesh will always have a special place in your heart. ❤️"
    );
  };

  return (
    <div className="page">

      <div className="card">

        <h1>💍</h1>

        <h2>Will you marry me? ❤️</h2>

        <p className="message">
          I want to spend my whole life with you.
        </p>

        <div className="buttons">

          <button
            className="yes-btn"
            onClick={handleYes}
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

export default Proposal;