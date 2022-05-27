import React, { HTMLProps } from "react";
import "./MainButton.css";

interface Props extends HTMLProps<HTMLButtonElement> {
  btnText: string;
  type: "button" | "submit" | "reset" | undefined;
  disableButton?: boolean;
  // ボタンコンポーネントを作成する祭はこの型に指定してあげてる方が汎用性を考えるといい
  // しかしイベントを引数に取ることがなければ必要ない
}

export const MainButton = React.memo(
  ({ btnText, type, onClick, disableButton, ...props }: Props) => {
    console.log("MainButton");
    return (
      <button
        {...props}
        type={type}
        className={disableButton ? "btn btn__disabled" : "btn main-btn"}
        onClick={onClick}
      >
        {btnText}
      </button>
    );
  }
);

// TODO　このコンポーネントは404ページとサイト紹介のページで使用する
// TODO　汎用的に使用するにはclassNameを動的にしないといけない