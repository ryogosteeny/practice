import React from "react";
import "./DescHead.css";

export const DescHead = React.memo(() => {
  console.log("DescHead");
  return <h2 className={"descHead"}>このサイトについて</h2>;
});
