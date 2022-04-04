import React, { useCallback } from "react";
import "./Button.css";

interface Props {
  buttonText: string;
  onClick: () => void;
}

export const Button = React.memo(({ buttonText, onClick }: Props) => {
  console.log("Button :", `${buttonText}`);

  return (
    <div className={"buttonDiv"}>
      <button onClick={onClick} className={"button"}>
        {buttonText}
      </button>
    </div>
  );
});
