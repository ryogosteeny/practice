import React from "react";
import { Counter } from "../atoms/Counter";
import { Button } from "../atoms/Button";
import { useCounter } from "../../hooks/useCounter";

interface Props {
  counterTitle: string;
  buttonText: string;
}

export const CounterOrganism = ({ counterTitle, buttonText }: Props) => {
  const { count, handleCountUpA } = useCounter();
  return (
    <div className={"item"}>
      <Counter counterTitle={counterTitle} count={count} />
      <Button buttonText={buttonText} onClick={handleCountUpA} />
    </div>
  );
};
