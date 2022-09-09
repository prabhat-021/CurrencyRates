import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import pic4 from "./images/logocom.jpg";
export default function Mid() {
  return (
    <section>
      <div className="midsec">
        <h1 className="midp1">Xe Currency Data API</h1>
        <h4 className="midp1 midp2">
          Powering commercial grade rates at 300+ companies worldwide
        </h4>
        <img className="img1" src={pic4} />
        <br />
        <button className="btn1"> Learn More</button>
      </div>
    </section>
  );
}
