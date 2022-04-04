import React from "react";
import "./Counter.css";

interface Props {
  counterTitle: string;
  count: number;
}

export const Counter = React.memo(({ counterTitle, count }: Props) => {
  console.log("Counter :", `${counterTitle}`);
  return (
    <div className={"counter"}>
      {counterTitle}:<span className={"count"}>{count}</span>
    </div>
  );
});
