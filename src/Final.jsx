import couple from "./couple.jpg";
import "./Final.css"
function Final() {

  return (
    <div className="page">

      <div className="card">

        <h1>Rakesh ❤️ Hemangini</h1>

        <img
          src={couple}
          alt="Our Photo"
          className="couple-image"
        />

        <h2>
          I Love You,
          <br />
          Darling ❤️
        </h2>

        <p className="message">

          Thank you for answering all my questions.

          <br /><br />

          You are the most beautiful part of my life.

          <br /><br />

          I promise to stand beside you,

          support you,

          respect you,

          and love you forever.

          <br /><br />

          No matter what happens,

          I will always pray for your happiness.

          <br /><br />

          ❤️ Yours Forever ❤️

          <br />

          Rakesh

        </p>

      </div>

    </div>
  );
}

export default Final;