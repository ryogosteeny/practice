import React, { VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { Header } from "./components/atoms/Header";

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
        <Header title={"映画の作品"} />
        {/*<CounterOrganism />*/}
        {/*<DescBox />*/}
      </div>
    </GlobalProvider>
  );
};
