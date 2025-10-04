import Header from "../components/Header";

// Home page: displays a welcome message and navigation
export default function Home() {
  return (
    <div>
      {/* Include the navigation header */}
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Welcome to My Assignment 1 App 🚀</h1>
        <p>This is the home page. Use the navigation above to explore features.</p>
      </main>
    </div>
  );
}
