import React from "react";
import { css, Global } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  return (
    <div>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }

          body {
            font-family: "Noto Sans JP", -apple-system, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
          }
        `}
      />
      {children}
    </div>
  );
};
