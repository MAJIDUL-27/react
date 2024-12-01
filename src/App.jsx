import { useState } from "react";
import Counters from "./Components/Counters";

function App() {
  const [counters, setCounters] = useState(0);
  const handleIncrement = (counterId) => {
    const updatedCounter = counters.map((c) => {
      if (c.id === counterId) {
        return { ...c, value: c.value + 1 };
      } else {
        return c;
      }
    });
    setCounters(updatedCounter);
  };
  const handleDecrement = (counterId) => {
    const updatedCounter = counters.map((c) => {
      if (c.id === counterId) {
        return { ...c, value: c.value - 1 };
      } else {
        return c;
      }
    });
    setCounters(updatedCounter);
  };
  const totalValue = counters.reduce(
    (sum, currentValue) => sum + currentValue.value,
    0
  );
  return (
    <>
      {counters.map((counter) => (
        <Counters
          key={counter.id}
          onCount={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <p>{totalValue}</p>
    </>
  );
}

export default App;
