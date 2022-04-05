import React from "react";
import "./SubTitle.css";

interface Props {
  subTitleText: string;
}

export const SubTitle = ({ subTitleText }: Props) => {
  console.log("SubTitle :", `${subTitleText}`);
  return (
    <div>
      <h3 className={"subTitleText"}>{subTitleText}</h3>
    </div>
  );
};
