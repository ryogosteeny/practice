import React from "react";
import { Counter } from "../atoms/Counter";
import { Title } from "../atoms/Title";
import { SubTitle } from "../atoms/SubTitle";
import "./CounterOrganism.css";

export const CounterOrganism = () => {
  return (
    <div className={"item"}>
      <Title titleText={"# hooks"} />
      <SubTitle subTitleText={"緊急アンケート"} />
      <div className={"itemList"}>
        <div className={"itemCounter"}>
          <Counter counterTitle={"A派"} buttonText={"もちろんA派"} />
        </div>
        <div className={"itemCounter"}>
          <Counter counterTitle={"B派"} buttonText={"もちろんB派"} />
        </div>
      </div>
    </div>
  );
};
