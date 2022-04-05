import React from "react";
import "./Counter.css";
import { Button } from "./Button";
import { useCounter } from "../../hooks/useCounter";

interface Props {
  counterTitle: string;
  buttonText: string;
}

export const Counter = ({ counterTitle, buttonText }: Props) => {
  const { count, handleCountUpCallBack } = useCounter();
  console.log("Counter :", `${counterTitle}`);
  return (
    <div className={"counter"}>
      {counterTitle}:<span className={"count"}>{count}</span>
      <Button buttonText={buttonText} onClick={handleCountUpCallBack} />
    </div>
  );
};
