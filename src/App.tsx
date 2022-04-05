import React, { VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { Title } from "./components/atoms/Title";
import { SubTitle } from "./components/atoms/SubTitle";
import { CounterOrganism } from "./components/organism/CounterOrganism";
import { useCounter } from "./hooks/useCounter";

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
        <Title titleText={"# CustomHooks"} />
        <SubTitle subTitleText={"緊急アンケート：あなたはA派？それともB派？"} />
        <div className={"itemList"}>
          <CounterOrganism counterTitle={"A派"} buttonText={"もちろんA派"} />
          <CounterOrganism counterTitle={"B派"} buttonText={"もちろんB派"} />
          <CounterOrganism counterTitle={"C派"} buttonText={"もちろんC派"} />
        </div>
      </div>
    </GlobalProvider>
  );
};
