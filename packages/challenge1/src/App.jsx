import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsVisible((p) => !p)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <h1>Hello, welcome to react challenges</h1>}
    </div>
  );
}