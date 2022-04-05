import React from "react";
import "./Button.css";

interface Props {
  buttonText: string;
  onClick: () => void;
}

export const Button = React.memo(({ buttonText, onClick }: Props) => {
  console.log("Button :", `${buttonText}`);

  return (
    <div>
      <button onClick={onClick} className={"button"}>
        {buttonText}
      </button>
    </div>
  );
});
