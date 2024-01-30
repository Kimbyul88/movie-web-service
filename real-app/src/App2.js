import Button from "./Button";
import { useState, useEffect } from "react";

function App2() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue((counter) => counter + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("render");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "") console.log("I run only when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run only when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' change.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      />
      <h1>{counter}</h1>
      {/* <Button text={"Continue"} /> */}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App2;
