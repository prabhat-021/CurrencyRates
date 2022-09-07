import "./styles.css";
import react from "react";
import ReactDOM from "react-dom";
import icons from "../public/images/icons.jpg";
export default function Footer() {
  return (
    <section className="footer">
      <div className="box">
        <div className="foot1">
          The Original Currency Exchange Rates Calculator
        </div>
        <div className="app1 footp1">
          Since 1995, the Xe Currency Converter has provided free mid-market
          exchange rates for millions of users. Our latest currency calculator
          is a direct descendent of the fast and reliable original "Universal
          Currency Calculator" and of course it's still free! Learn more about
          Xe, our latest money transfer services, and how we became known as the
          world's currency data auth
        </div>
      </div>
      <div className="icons">
        <div>
          <h1 className="icont1">Language</h1>
          <div className="icont1 icon2">English</div>
        </div>
        <div>
          <img className="img3" src={icons} />
        </div>
      </div>
      <section className="bottom">
        <div>
          <h1 className="btmh1">Transfer Money</h1>
          <ul className="ul1">
            <li className="li2">Register / Login</li>
            <li className="li2">US Money Transfer</li>
            <li className="li2">UK Money Transfer</li>
            <li className="li2">Europe Money Transfer</li>
            <li className="li2">Canada Money Transfer</li>
            <li className="li2">Australia Money Transfer</li>
            <li className="li2">New Zealand Money Transfer</li>
            <li className="li2">How does it work?</li>
            <li className="li2">Money Transfer Advice</li>
            <li className="li2">Fraud Prevention</li>
            <li className="li2">Trustpilot Reviews</li>
          </ul>
        </div>
        <div>
          <h1 className="btmh1">Apps</h1>
          <ul className="ul1">
            <li className="li2">Money Transfer & Currency Apps</li>
            <li className="li2">Android Money Transfer App</li>
            <li className="li2">iOS Money Transfer App</li>
            <li className="li2">Salesforce App</li>
            <li className="li2">Alexa App</li>
            <li className="li2">Slack App</li>
            <li className="li2">Google Assistant App</li>
            <li className="li2">Facebook App</li>
          </ul>
        </div>
        <div>
          <h1 className="btmh1">Tools & Resources</h1>
          <ul className="ul1">
            <li className="li2">Blog</li>
            <li className="li2">Currency Converter</li>
            <li className="li2">Currency Charts</li>
            <li className="li2">Currency Encyclopedia</li>
            <li className="li2">Historical Currency Rates</li>
            <li className="li2">Travel Expenses Calculator</li>
            <li className="li2">IBAN Calculator</li>
            <li className="li2">Currency Newsletters</li>
            <li className="li2">Glossary</li>
          </ul>
        </div>
        <div>
          <h1 className="btmh1">XE Business</h1>
          <ul className="ul1">
            <li className="li2">Register / Login</li>
            <li className="li2">US Business Money Transfer</li>
            <li className="li2">UK Business Money Transfer</li>
            <li className="li2">Europe Business Money Transfer</li>
            <li className="li2">Canada Business Money Transfer</li>
            <li className="li2">Australia Business Money Transfer</li>
            <li className="li2">New Zealand Business Money Transfer</li>
            <li className="li2">Malaysia Business Money Transfer</li>
            <li className="li2">Mass Payments</li>
            <li className="li2">Products & Services</li>
            <li className="li2">Partnerships</li>
            <li className="li2">Why XE?</li>
          </ul>
        </div>
      </section>
      <div className="bot1">
        <h3 className="btmh1 contact">Company Info</h3>
        <ul className="companyinfo">
          <li className="li2">Site Map</li>
          <li className="li2">About Us</li>
          <li className="li2">Partnerships</li>
          <li className="li2">Careers</li>
          <li className="li2">Help Center</li>
          <li className="li2">Legal</li>
          <li className="li2">Privacy</li>
          <li className="li2">Cookie Policy</li>
          <li className="li2">Consent Manager</li>
          <li className="li2">Money Transfer Important Information</li>
          <li className="li2">File a Complaint</li>
          <li className="li2">Error Resolution</li>
        </ul>
      </div>
      <h5>© 1995-2022 XE.com Inc.</h5>
    </section>
  );
}
