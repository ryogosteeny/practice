import React, { VFC } from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalProvider";
import { createTheme } from "@mui/material";
import { Film } from "./components/organism/Film";
import { LocalNav } from "./components/organism/LocalNav";

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
        {/*<Film />*/}
        <LocalNav />
      </div>
    </GlobalProvider>
  );
};
