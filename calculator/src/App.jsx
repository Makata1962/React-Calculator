import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ClearButton } from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const handleClear = () => {
    setInput("");
  };

  const AddToInput = (val) => {
    if (val === "X") {
      val = "*";
    }
    setInput((prevState) => {
      return prevState + val;
    });
  };

  const handleEqual = () => {
    setInput(evaluate(input));
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={AddToInput}>7</Button>
          <Button handleClick={AddToInput}>8</Button>
          <Button handleClick={AddToInput}>9</Button>
          <Button handleClick={AddToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={AddToInput}>4</Button>
          <Button handleClick={AddToInput}>5</Button>
          <Button handleClick={AddToInput}>6</Button>
          <Button handleClick={AddToInput}>X</Button>
        </div>
        <div className="row">
          <Button handleClick={AddToInput}>1</Button>
          <Button handleClick={AddToInput}>2</Button>
          <Button handleClick={AddToInput}>3</Button>
          <Button handleClick={AddToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={AddToInput}>.</Button>
          <Button handleClick={AddToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={AddToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={handleClear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
