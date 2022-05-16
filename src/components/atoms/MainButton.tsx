import React from "react";
import "./MainButton.css";

interface Props {
  btnText: string;
  onClick: () => void;
}

export const MainButton = ({ onClick, btnText }: Props) => {
  console.log("MainButton");
  return (
    <button onClick={onClick} className={"btn main-btn"}>
      {btnText}
    </button>
  );
};

// TODO　このコンポーネントは404ページとサイト紹介のページで使用する
// TODO　汎用的に使用するにはclassNameを動的にしないといけない
