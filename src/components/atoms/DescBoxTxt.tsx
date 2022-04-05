import React from "react";
import "./DescBoxTxt.css";

interface Props {
  isVisible: boolean;
}

export const DescBoxTxt = React.memo(({ isVisible }: Props) => {
  // todo stateの値によって表示非表示切り替える
  console.log("DescBoxTxt");

  return (
    <div className={"txtBox"}>
      {isVisible ? (
        <p>
          このページは付箋をpostするページです。
          <br />
          各色のボタンを押すことで付箋の色を変更することができます。
          <br />
          それぞれの一覧から各ページの付箋リストを見ることができます。
        </p>
      ) : (
        <p>説明文は非表示になっています。</p>
      )}
    </div>
  );
});
