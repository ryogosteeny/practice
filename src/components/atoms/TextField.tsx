import React from "react";
import "./TextField.css";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  helperText?: string;
  isHelperText?: boolean;
  requiredLabel: "required" | "required__display-none";
}

export const TextField = ({
  label,
  helperText,
  onChange,
  isHelperText,
  requiredLabel,
  ...props
}: Props) => {
  return (
    <div className="text-field-ly">
      <label className="label">
        {label}
        <span className={requiredLabel}>(必須)</span>
      </label>
      <input {...props} onChange={onChange} className="text-field" />
      {/*  TODO helperTextの表示非表示のstateは親で管理する為その時一緒に実装　*/}
      {isHelperText && (
        <label className="helper-text helper-text__warning">{helperText}</label>
      )}
    </div>
  );
};

// 空欄の時に送信は押せないが、いずれかを入力した時点でenableになる

// TODO 必須の項目を全て入力できた時点でボタンをenableにする
// TODO 入力条件に当てはまってなかった時点(フォーカスを外した時)で知らせる
// TODO placeholderをつける