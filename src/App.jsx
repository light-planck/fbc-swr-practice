import { useStatus } from "./hooks/useStatus";

import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const { status, error, isLoading } = useStatus({
    url,
    options: { headers },
  });

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;
  return <>{status.code === 200 && <p>Status : {status.description}</p>}</>;
}

export default App;
