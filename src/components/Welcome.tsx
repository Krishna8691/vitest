export default function Welcome({ userName }: { userName?: string }) {
  if (userName === undefined) {
    return <h1 data-testid="welcome">Welcome, Guest User</h1>;
  }
  return <h1 data-testid="welcome">Welcome, {userName}</h1>;
}
