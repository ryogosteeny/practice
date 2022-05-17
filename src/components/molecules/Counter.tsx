import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { MainButton } from "../atoms/MainButton";
import "./Counter.css";

interface Props {
  counterTitle: string;
  buttonText: string;
}

export const Counter = ({ counterTitle, buttonText }: Props) => {
  const { count, handleCountUpCallBack } = useCounter();
  console.log("Counter :", `${counterTitle}`);
  return (
    <div className="counter">
      <div className="counter__item">
        {counterTitle}:{count}
      </div>
      <MainButton btnText={buttonText} onClick={handleCountUpCallBack} />
    </div>
  );
};
