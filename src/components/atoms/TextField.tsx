import React from "react";
import "./TextField.css";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export const TextField = ({ label, helperText, onChange, ...props }: Props) => {
  return (
    <div className="text-field-ly">
      <label className="label">{label}</label>
      <input {...props} onChange={onChange} className="text-field" />
      {/*  TODO helperTextの表示非表示のstateは親で管理する為その時一緒に実装　*/}
      <label className="helper-text helper-text__warning">{helperText}</label>
    </div>
  );
};
