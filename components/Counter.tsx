'use client';
import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

// Counter component: demonstrates state management and conditional rendering
export default function Counter({ initialCount }: CounterProps) {
  // useState hook to keep track of count
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Counter Example</h2>
      {/* Display current count */}
      <p>Current count: {count}</p>
      {/* Buttons to modify the counter state */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "1rem" }}>
        Decrease
      </button>

      {/* Conditional rendering based on count */}
      {count >= 5 ? (
        <p style={{ color: "green" }}>🎉 Count is 5 or more!</p>
      ) : (
        <p style={{ color: "gray" }}>Keep clicking…</p>
      )}
    </div>
  );
}
