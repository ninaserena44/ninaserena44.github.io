import Header from "../components/Header";

type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <h2>Hello, {name} 👋</h2>;
}

export default function Feature2() {
  const users = ["Serena", "Ashley", "Natasha"];

  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Feature 2: Greetings</h1>
        {users.map((user, index) => (
          <Greeting key={index} name={user} />
        ))}
      </main>
    </div>
  );
}
