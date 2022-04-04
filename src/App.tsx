import React, { useCallback, useState, VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme, ThemeProvider } from "@mui/material";
import { Counter } from "./components/atoms/Counter";
import { Title } from "./components/atoms/Title";
import { SubTitle } from "./components/atoms/SubTitle";
import { Button } from "./components/atoms/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1849a5",
    },
  },
});

export const App: VFC = () => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  const handleCountUpA = useCallback(() => {
    setCountA(countA + 1);
  }, [countA]);

  const handleCountUpB = useCallback(() => {
    setCountB(countB + 1);
  }, [countB]);

  console.log("------------------------");

  return (
    <GlobalProvider>
      <div className={"app"}>
        <Title titleText={"#6 useCallBack"} />
        <SubTitle subTitleText={"緊急アンケート：あなたはA派？それともB派"} />
        <div className={"itemList"}>
          <div className={"item"}>
            <Counter counterTitle={"A派"} count={countA} />
            <Button buttonText={"もちろんA派"} onClick={handleCountUpA} />
          </div>
          <div className={"item"}>
            <Counter counterTitle={"B派"} count={countB} />
            <Button buttonText={"もちろんB派"} onClick={handleCountUpB} />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};
