import React from "react";
import "./Header.css";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <header className="header">
      <h2 className="header-inner">{title}</h2>
    </header>
  );
};
