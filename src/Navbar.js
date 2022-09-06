import react from "react";
import ReactDOM from "react-dom";
import gfgLogo from "../public/images/w3c_home.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={gfgLogo} className="hw" />
      </div>
      <div className="details">
        <ul className="hw">
          <li>Personal</li>
          <li>|</li>
          <li>Business</li>
        </ul>
      </div>
      <div className="component">
        <ul className="hw">
          <li className="li1">Send Money</li>
          <li className="li1">Converter</li>
          <li className="li1">Currency API</li>
          <li className="li1">Tools</li>
          <li className="li1">Resourses</li>
        </ul>
      </div>
      <div className="login">
        <ul className="hw">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}
