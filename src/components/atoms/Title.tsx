import React from "react";
import "./Title.css";

interface Props {
  titleText: string;
}

export const Title = React.memo(({ titleText }: Props) => {
  console.log("Title :", `${titleText}`);
  return (
    <div>
      <h2 className={"titleText"}>{titleText}</h2>
    </div>
  );
});
