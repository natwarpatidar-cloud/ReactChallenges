import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  const startTimer = () => {
    if(isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime(p => {
        if(p > 1) {
          return p -= 1;
        } else {
          setIsRunning(false);
          return 0;
        }
      });
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>No of clicks until timer expires</p>
      <div style={{ width: '200px', height: '200px', backgroundColor: 'orange', padding: '20px', textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{count}</h1>
        <span>Time left: {time} seconds</span>
        {
          isRunning && <button style={{width: '30px'}} onClick={() => setCount(count + 1)}>+</button>
        }
      </div>
    </div>
  )
}

export default App;