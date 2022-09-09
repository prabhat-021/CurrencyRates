import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import cont from "./images/country.jpg";
export default function CurrencyProfile() {
  return (
    <section>
      <div className="currency">
        <h1 className="crr1">Daily market updates straight to your inbox</h1>
        <button className="btn1"> Sign Up</button>
      </div>
      <div>
        <h1 className="crr1">Currency Profiles</h1>
        <img className="star" src={cont} />
      </div>
    </section>
  );
}
