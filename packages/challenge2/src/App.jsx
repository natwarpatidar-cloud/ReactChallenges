import { useState, useEffect } from "react";
import { Button} from 'ui/components/button';

export default function App() {
  const [sec, setSec] = useState(56);
  const [min, setMin] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    // Complete this function
    setRunning(true);
  };

  const stopTimer = () => {
    // Complete this function
    setRunning(false);
  };

  const resetTimer = () => {
    // Complete this function
    setRunning(false);
    setMin(0);
    setSec(0);
  };

  useEffect(() => {
    let interval;
    if(running) {
      interval = setInterval(() => {
        setSec(p => {
          if(p >= 59) {
            setMin(m => m + 1);
            return 0;
          } else {
            return p+1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {min} mins </span>
      <span> {sec} secs</span>
      <div>
        <Button onClick={startTimer}>Start</Button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
