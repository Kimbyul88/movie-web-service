import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const CoinApp = () => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0.0);
    const [usd, setUsd] = useState(0);
    const [ifChange, setIfChange] = useState(false);
    const onChange = (event) => {
      setType(event.target.options[event.target.selectedIndex].title);
      setPrice(event.target.value);
    };
    const onInput = (event) => {
      setUsd(event.target.value);
    };
    const onClick = () => {
      setIfChange((prev) => !prev);
    };
    return (
      <div>
        <label htmlFor="selection">Select your coin type </label>
        <select disabled={ifChange} onChange={onChange} id="selection">
          <option key={""}>/choose your type</option>
          {coins.map((coin, index) => (
            <option
              title={coin.symbol}
              value={coin.quotes.USD.price}
              key={index}
            >
              {index + 1}. {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="inputUSD">Your USD amount </label>
          <input
            disabled={ifChange}
            onChange={onInput}
            value={usd}
            id="inputUSD"
            type="number"
          ></input>
        </div>
        <button
          style={{
            fontSize: "30px",
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            "&:hover": { backgroundColor: "yellow" },
          }}
          onClick={onClick}
        >
          {ifChange ? "Reselect" : "Change!"}
        </button>
        {ifChange ? (
          <div
            style={{
              color: "gray",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            change {type} to {usd} USD 🔽
          </div>
        ) : null}
        {ifChange ? (
          <div
            style={{
              color: "blue",
              fontSize: "40px",
              fontWeight: "bolder",
            }}
          >
            {price * usd} {type}
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <div>
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <CoinApp />}
    </div>
  );
}
export default App;
