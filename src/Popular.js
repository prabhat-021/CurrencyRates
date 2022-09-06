import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import pic1 from "../public/images/graph.jpg";
import pic2 from "../public/images/send.jpg";
import pic3 from "../public/images/bell.jpg";
export default function Popular() {
  return (
    <section className="popular">
      <div>
        <h1 className="po1">The world's most popular currency tools </h1>
      </div>
      <div className="card">
        <div className="container">
          <div>
            <img src={pic1} />
            <h1 className="g1"> Xe International Money Transfer</h1>
            <div>
              <h3 className="p1">
                Send money online fast, secure and easy. Live tracking and
                notifications + flexible delivery and payment options
              </h3>
              <a href="#" class="btn">
                Send Money
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={pic2} />
            <h1 className="g1">Xe Currency Charts</h1>
            <div>
              <h3 className="p1">
                Create a chart for any currency pair in the world to see their
                currency history. These currency charts use live mid-market
                rates, are easy to use, and are very reliable.
              </h3>
              <a href="#" class="btn">
                Graph
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={pic3} />
            <h1 className="g1"> Xe Rate Alerts</h1>
            <div>
              <h3 className="p1">
                Need to know when a currency hits a specific rate? The Xe Rate
                Alerts will let you know when the rate you need is triggered on
                your selected currency pairs.
              </h3>
              <a href="#" class="btn">
                Create Alerts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
