'use client';
import Header from '../components/Header';
import Counter from '../components/Counter';

export default function Feature1() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
       <h1>Feature 1: Counter </h1>
       <Counter initialCount={0} />
      </main>
    </div>
  );
}
