import "./styles.css";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Mid from "./Mid.js";
import Mid2 from "./Mid2.js";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Popular />
      <Mid />
      <Mid2 />
    </div>
  );
}
