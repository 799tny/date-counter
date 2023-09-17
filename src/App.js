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
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStepPlus() {
    return setStep((s) => s + 1);
  }
  function handleStepMinus() {
    return setStep((s) => s - 1);
  }
  function handleCountPlus() {
    return setCount((s) => s + step);
  }
  function handleCountMinus() {
    return setCount((s) => s - step);
  }
  const date = new Date("sept 17 2023");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <button onClick={handleStepMinus}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleStepPlus}>+</button>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}

export default App;
