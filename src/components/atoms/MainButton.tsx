import React from "react";
import "./MainButton.css";

interface Props {
  btnText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // ボタンコンポーネントを作成する祭はこの型に指定してあげてる方が汎用性を考えるといい
  // しかしイベントを引数に取ることがなければ必要ない
}

export const MainButton = React.memo(({ onClick, btnText }: Props) => {
  console.log("MainButton");
  return (
    <button onClick={onClick} className={"btn main-btn"}>
      {btnText}
    </button>
  );
});

// TODO　このコンポーネントは404ページとサイト紹介のページで使用する
// TODO　汎用的に使用するにはclassNameを動的にしないといけない
