import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepChange = (event) => {
    const newStep = parseInt(event.target.value, 10);
    if (!isNaN(newStep) && newStep >= 0 && newStep <= 10) {
      setStep(newStep);
    }
  };

  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
  };
  function handleCountPlus() {
    return setCount((s) => s + step);
  }
  function handleCountMinus() {
    return setCount((s) => s - step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date("sept 17 2023");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={handleStepChange}
      />

      <span>{step}</span>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <input type="number" value={count} onChange={handleCountChange}></input>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
