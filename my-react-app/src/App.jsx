import { useState } from "react";
import House from "./components/House";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <House name="paradise"></House>
    </div>
  );
}