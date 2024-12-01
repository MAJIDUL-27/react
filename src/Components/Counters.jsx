const Counters = ({ onCount, onIncrement, onDecrement }) => {
  return (
    <>
      <p>{onCount}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};

export default Counters;
