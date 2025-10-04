'use client';
import Header from '../components/Header';
import Counter from '../components/Counter';

// Feature 1 page: displays the Counter component
export default function Feature1() {
  return (
    <div>
      {/* Include the navigation header */}
      <Header />
      <main style={{ padding: "1rem" }}>
       <h1>Feature 1: Counter </h1>

       {/* Counter component with initial count passed as prop */}
       <Counter initialCount={0} />
      </main>
    </div>
  );
}
