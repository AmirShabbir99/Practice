import { useEffect, useRef, useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const startCounter = () => {
    stopCounter(); // Clear any existing interval
    interval.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);
  };

  const stopCounter = () => {
 
      clearInterval(interval.current);
    
    
  };

  const resetCounter = () => {
    stopCounter();
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={resetCounter}>Reset</button>
       <button onClick={startCounter}>Start</button>
    </div>
  );
};

export default App;
