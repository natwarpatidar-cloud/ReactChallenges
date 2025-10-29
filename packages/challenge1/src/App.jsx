import { useState } from "react";
import { Button} from 'ui/components/button';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <Button onClick={() => setIsVisible((p) => !p)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </Button>
      {isVisible && <h1>Hello, welcome to react challenges</h1>}
    </div>
  );
}