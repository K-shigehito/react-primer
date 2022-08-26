import { useReducer } from "react";
import Counter from "./Counter.jsx";

const ReducerTest = () => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  const step = 2;
  const countUp = () => {
    dispatch({ type: "+", step: step });
  };
  const countDown = () => {
    dispatch({ type: "-", step: step });
  };

  return (
    <>
      <Counter state={state} countUp={countUp} countDown={countDown} />
    </>
  );
};

export default ReducerTest;
