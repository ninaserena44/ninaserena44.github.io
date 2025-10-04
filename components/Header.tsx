import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link href="/" style={{ marginRight: "1rem", color: "#61dafb" }}>
        Home
      </Link>
      <Link href="/feature1" style={{ marginRight: "1rem", color: "#61dafb" }}>
        Counter
      </Link>
      <Link href="/feature2" style={{ color: "#61dafb" }}>
        Greetings
      </Link>
    </nav>
  );
}
