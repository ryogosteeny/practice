import React from "react";
import "./HideButton.css";

interface Props {
  btnText: string;
  onClick: () => void;
}

export const HideButton = ({ onClick, btnText }: Props) => {
  console.log("HideButton");
  return (
    <button onClick={onClick} className={"hideBtn"}>
      {btnText}
    </button>
  );
};
