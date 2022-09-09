import "./styles.css";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Mid from "./Mid.js";
import Mid2 from "./Mid2.js";
import Appsection from "./Appsection.js";
import star from "./img/star.jpg";
import CurrencyProfile from "./CurrencyProfile";
import Footer from "./Footer.js";
import CurrencyConverter from "./CurrencyConverter.js";
export default function App() {
  return (
    <div className="App">
      <Navbar />
       <CurrencyConverter />
      <Popular />
      <Mid />
      <Mid2 />
      <Appsection />
      <img className="star" src={star} />
      <CurrencyProfile />
      <Footer />
    </div>
  );
}
