import "./Password.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Change this to your secret date
  const secretPassword = "19/10/2024";

  const handleSubmit = () => {
    if (password === secretPassword) {
      navigate("/welcome");
    } else {
      setError("oops! That's not our anniversery date ❤️");
    }
  };

  return (
    <div className="password-page">

      <div className="card">

        <h1>🔒</h1>

        <h2>Our Anniversey Date ❤️</h2>

        <p>
          Only you know the password 😊
        </p>

        <input
          type="text"
          placeholder="DD/MM/YYYY"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Continue ❤️
        </button>

        <p className="error">{error}</p>

      </div>

    </div>
  );
}

export default Password;