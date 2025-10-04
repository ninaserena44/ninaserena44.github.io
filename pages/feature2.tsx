import Header from "../components/Header";

// Greeting component: receives a name as prop and displays it
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <h2>Hello, {name} 👋</h2>;
}

// Feature 2 page: displays a list of greetings
export default function Feature2() {
  const users = ["Serena", "Ashley", "Natasha"];

  return (
    <div>
      {/* Include the navigation header */}
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Feature 2: Greetings</h1>
        {/* Render a Greeting component for each user in the array */}
        {users.map((user, index) => (
          <Greeting key={index} name={user} />
        ))}
      </main>
    </div>
  );
}
