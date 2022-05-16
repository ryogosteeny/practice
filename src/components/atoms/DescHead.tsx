import React from "react";
import "./DescHead.css";

interface Props {
  title: string;
}

export const DescHead = React.memo(({ title }: Props) => {
  console.log("DescHead");
  return (
    <div className="desc-head">
      <h2 className="desc-head__title">{title}</h2>
    </div>
  );
});

// TODO ここは汎用的にする
