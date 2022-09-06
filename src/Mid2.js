import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import pic5 from "../public/images/clock.jpg";
import pic6 from "../public/images/calculator.jpg";
import pic7 from "../public/images/mail.jpg";
export default function Mid2() {
  return (
    <div className="App">
      <h1 className="midh1">Xe Currency Tools</h1>
      <div className="tool">
        <div className="midh2">
          <img className="midimg" src={pic5} />
          <br />
          Historical Currency Rates
        </div>
        <div className="midh2">
          <img className="midimg" src={pic6} />
          <br />
          Travel Expenses Calculator
        </div>
        <div className="midh2">
          <img className="midimg" src={pic7} />
          <br />
          Currency Email Updates
        </div>
      </div>
      <button className="btn1 btn2">More Tools</button>
    </div>
  );
}

