import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [count]); // Empty dependency array means run only once on mount

  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>clearInterval(0)}>btn</button>
    </div>
  );
};

export default App;
