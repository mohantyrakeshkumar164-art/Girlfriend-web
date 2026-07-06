import { useNavigate } from "react-router-dom";
import "./Welcome.css"
function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page">

      <div className="card">

        <h1>❤️ Hi  Darling ❤️</h1>

        <p className="message">
          I made something special just for you.
        </p>

        <p className="message">
          Please answer a few questions honestly.
        </p>

        <p className="message">
          I hope this little surprise makes you smile. 😊
        </p>

        <button onClick={() => navigate("/love")}>
          Start ❤️
        </button>

      </div>

    </div>
  );
}

export default Welcome;