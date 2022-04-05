import React, { VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { CounterOrganism } from "./components/organism/CounterOrganism";
import { DescBox } from "./components/organism/DescBox";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1849a5",
    },
  },
});

export const App: VFC = () => {
  console.log("------------------------App.tsx");

  return (
    <GlobalProvider>
      <div className={"app"}>
        <CounterOrganism />
        <DescBox />
      </div>
    </GlobalProvider>
  );
};
