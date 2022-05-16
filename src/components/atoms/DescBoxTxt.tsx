import React from "react";
import "./DescBoxTxt.css";

interface Props {
  description: string;
}

export const DescBoxTxt = React.memo(({ description }: Props) => {
  console.log("DescBoxTxt");

  return (
    <div className="txtBox">
      <p>{description}</p>
    </div>
  );
});

// TODO　このコンポーネントは404ページとサイト紹介のページで使用する
