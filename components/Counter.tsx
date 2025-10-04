'use client';
import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

export default function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Counter Example</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "1rem" }}>
        Decrease
      </button>

      {count >= 5 ? (
        <p style={{ color: "green" }}>🎉 Count is 5 or more!</p>
      ) : (
        <p style={{ color: "gray" }}>Keep clicking…</p>
      )}
    </div>
  );
}
