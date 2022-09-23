import "./styles.css";
import react from "react";
import { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
export default function CurrencyConverter() {
  const [initialState, setState] = useState({
    currencies: ["USD", "INR", "EUR", "PHP", "SGD"],
    base: "USD",
    amount: "",
    convertTo: "INR",
    result: "",
    date: ""
  });

  const { currencies, base, amount, convertTo, result, date } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyconvertTor = async () => {
        const response = await axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=f6192dbc30f04682b513bbb82c36aceb#`
        );
        console.log("response==>", response);
        const date = response.data.date;
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        setState({
          ...initialState,
          result,
          date
        });
      };
      getCurrencyconvertTor();
    }
  }, [amount, base, convertTo]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null
    });
  };
  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null
    });
  };

  return (
    <div className="container ml-5">
      <div className="row">
        <div style={{ padding: "30px", background: "#ececec" }}>
          <Card
            title="Currency Converter"
            bordered={false}
            // style={{ width: 100 }}
            className="cardcurr"
          >
            <h6 className="currh1">
              {amount} {base} is equivqlent to{" "}
            </h6>
            <h3>
              {amount === ""
                ? "0"
                : result === null
                ? "Calculating..."
                : result}
              {convertTo}
            </h3>
            <p>As of {amount === "" ? "" : date === null ? "" : date}</p>
            <div className="row">
              <div className="col-lg-10">
                <form className="form-inline mb-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={onChangeInput}
                    className="form-control form-control-lg mx-5"
                  />
                  <select
                    name="base"
                    value={base}
                    onChange={handleSelect}
                    className="form-control form-control-lg"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
                <form className="form-inline mb-4">
                  <input
                    disabled={true}
                    value={
                      amount === ""
                        ? "0"
                        : result === null
                        ? "Calculating..."
                        : result
                    }
                    className="form-control form-control-lg mx-5"
                  />
                  <select
                    name="convertTo"
                    value={convertTo}
                    onChange={handleSelect}
                    className="form-control form-control-lg"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="col-lg-2 align-self-center">
                <h1 onClick={handleSwap} style={{ curser: "pointer" }}>
                  &#8595;&#8593;
                </h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
