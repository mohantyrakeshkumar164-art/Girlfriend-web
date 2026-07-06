import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Admin() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const querySnapshot = await getDocs(collection(db, "answers"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAnswers(data);
    };

    fetchAnswers();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>❤️ Hemangini's Answers ❤️</h1>

      {answers.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid pink",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;