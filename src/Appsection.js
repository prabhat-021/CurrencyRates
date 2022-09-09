import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import pic6 from "./images/phone.jpg";
import pic7 from "./images/Qrcode.jpg";
import pic8 from "./images/appledown.jpg";
import pic9 from "./images/playstore.jpg";
export default function Appsection() {
  return (
    <section className="appsection">
      <div>
        <img className="appimg" src={pic6} />
      </div>
      <div id="appsection" className="appdet">
        <div>
          <h1 className="apph1"> Download the Xe App</h1>
          <p className="app1">
            Check live rates, send money securely, set rate alerts, receive
            notifications and more.
          </p>
          <img className="qr" src={pic7} />
          <div className="appstore">
            <img className="store" src={pic8} />
            <img className="store" src={pic9} />
          </div>
          <h3 className="app1">Over 70 million downloads worldwide</h3>
        </div>
      </div>
    </section>
  );
}
